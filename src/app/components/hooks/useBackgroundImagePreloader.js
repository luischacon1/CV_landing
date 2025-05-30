import { useState, useEffect } from 'react';

const useBackgroundImagePreloader = (imageUrls, shouldStart = false) => {
  const [isPreloading, setIsPreloading] = useState(false);
  const [preloadComplete, setPreloadComplete] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (!shouldStart || !imageUrls || imageUrls.length === 0) {
      return;
    }

    setIsPreloading(true);
    let loadedImages = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          resolve(url);
        };
        img.onerror = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          resolve(url); // Resolve even on error to continue
        };
        img.src = url;
      });
    };

    const preloadAllImages = async () => {
      try {
        await Promise.all(imageUrls.map(preloadImage));
        setPreloadComplete(true);
        setIsPreloading(false);
      } catch (error) {
        console.error('Error preloading images in background:', error);
        setPreloadComplete(true);
        setIsPreloading(false);
      }
    };

    // Add a small delay to let the initial UI render first
    const timeoutId = setTimeout(() => {
      preloadAllImages();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [imageUrls, shouldStart]);

  return { 
    isPreloading, 
    preloadComplete, 
    loadedCount, 
    totalImages: imageUrls?.length || 0,
    progress: imageUrls?.length ? Math.round((loadedCount / imageUrls.length) * 100) : 0
  };
};

export default useBackgroundImagePreloader; 