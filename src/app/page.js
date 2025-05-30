"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/chat/Main";
import { AppProvider } from "./components/sidebar/AppContext";
import useImagePreloader from "./components/hooks/useImagePreloader";
import LoadingScreen from "./components/LoadingScreen";
import portfolioImages from "./utils/imageUrls";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { imagesLoaded, loadedCount, totalImages } = useImagePreloader(portfolioImages);

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
      <AnimatePresence mode="wait">
        {!imagesLoaded ? (
          <LoadingScreen 
            key="loading"
            loadedCount={loadedCount} 
            totalImages={totalImages} 
          />
        ) : (
          <main 
            key="main"
            className="flex h-screen w-screen bg-primary overflow-hidden"
          >
            {!isMobile && <Sidebar />}
            <Main />
          </main>
        )}
      </AnimatePresence>
    </AppProvider>
  );
}
