import OpenAI from "openai";
import { getSystemPrompt } from "./prompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = process.env.OPENAI_MODEL || "gpt-5-mini";
const MAX_HISTORY = 16;
const MAX_CHARS = 1200;

function clean(messages) {
  if (!Array.isArray(messages)) return [];
  return messages
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }))
    .slice(-MAX_HISTORY);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  const history = clean(body.messages);
  if (!history.length || history[history.length - 1].role !== "user") {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const params = {
    model: MODEL,
    stream: true,
    messages: [{ role: "system", content: getSystemPrompt() }, ...history],
    max_completion_tokens: 600,
  };
  if (/^gpt-5/.test(MODEL)) params.reasoning_effort = "minimal";
  else params.temperature = 0.8;

  let stream;
  try {
    stream = await openai.chat.completions.create(params);
  } catch (err) {
    console.error("openai error", err?.status, err?.message);
    const status = err?.status === 401 ? 401 : 502;
    return Response.json({ error: "upstream" }, { status });
  }

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const delta = chunk.choices?.[0]?.delta?.content;
          if (delta) controller.enqueue(encoder.encode(delta));
        }
      } catch (err) {
        console.error("stream error", err?.message);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
