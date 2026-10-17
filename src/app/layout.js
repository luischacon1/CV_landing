import "./globals.css";

export const metadata = {
  title: "Luis Fernández Chacón",
  description:
    "Esta web es un chat conmigo. Pregúntame lo que quieras y te cuento.",
  openGraph: {
    title: "Luis Fernández Chacón",
    description: "Esta web es un chat conmigo. Pregúntame lo que quieras y te cuento.",
    images: [{ url: "/media/luis-sonrisa.webp", width: 1271, height: 1266 }],
    locale: "es_ES",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Luis_fchacon",
  },
  icons: {
    icon: "/luis-favicon.png",
    apple: "/luis-favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
