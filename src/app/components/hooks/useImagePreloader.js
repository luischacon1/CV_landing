import { useState, useEffect } from 'react';

const useImagePreloader = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedImages = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
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
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Set to true even on error
      }
    };

    preloadAllImages();
  }, [imageUrls]);

  return { imagesLoaded, loadedCount, totalImages: imageUrls?.length || 0 };
};

export default useImagePreloader; 