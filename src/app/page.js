"use client";
import { useState, createContext } from "react";
import Main from "./components/chat/Main";
import Sidebar from "./components/sidebar/Sidebar";
import { AppProvider } from "./components/sidebar/AppContext";

export default function Home() {
  return (
    <>
      <AppProvider>
        <div
          className="min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: "url(/portfolio/luis/sky.jpg)",
            backgroundSize: "120%",
            backgroundPosition: "100% 40%", // X = 20%, Y = 50%
          }}
        >
          <main className="flex w-full md:w-1/2 flex-row md:h-full h-screen shadow-2xl">
            <Sidebar />
            <Main />
          </main>
        </div>
      </AppProvider>
    </>
  );
}
