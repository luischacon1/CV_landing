"use client";
import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/chat/Main";
import { AppProvider } from "./components/sidebar/AppContext";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <AppProvider>
      <main className="flex h-screen w-screen bg-primary overflow-hidden">
        {!isMobile && <Sidebar />}
        <Main />
      </main>
    </AppProvider>
  );
}
