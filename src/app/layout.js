import "./globals.css";
import { ModalImageProvider } from "./components/ModalImageContext";
import ModalImage from "./components/ModalImage";
// import AnimatedBackground from "./components/AnimatedBackground";

export const metadata = {
  title: "Luis Chacon",
  description: "Luis's Personal Website",
  icons: {
    icon: "/@luis-favicon.png",
    apple: "/@luis-favicon.png",
    shortcut: "/@luis-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <AnimatedBackground /> */}
        <ModalImageProvider>
          {children}
          <ModalImage />
        </ModalImageProvider>
      </body>
    </html>
  );
}
