'use client';
import React, { useState, useEffect } from 'react';
import { useModalImage } from './ModalImageContext';

const ModalImage = () => {
  const { modalImg, setModalImg } = useModalImage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on client side
    setIsMobile(window.innerWidth <= 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (modalImg) {
      setImageLoaded(false);
      const img = new Image();
      img.onload = () => {
        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
        setImageLoaded(true);
      };
      img.src = modalImg;
    }
  }, [modalImg]);

  if (!modalImg) return null;

  // Calculate if image is landscape or portrait
  const isLandscape = imageDimensions.width > imageDimensions.height;
  
  // Define consistent modal sizes that ensure full image visibility
  const getModalStyle = () => {
    if (isMobile) {
      return {
        maxWidth: '95vw',
        maxHeight: '85vh',
        width: 'auto',
        height: 'auto',
      };
    }
    
    if (isLandscape) {
      return {
        maxWidth: '90vw',
        maxHeight: '80vh',
        width: 'auto',
        height: 'auto',
      };
    } else {
      return {
        maxWidth: '70vw',
        maxHeight: '90vh',
        width: 'auto',
        height: 'auto',
      };
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[90] p-4"
      onClick={() => setModalImg(null)}
    >
      <div 
        className="relative bg-black rounded-xl shadow-2xl overflow-hidden flex items-center justify-center"
        style={getModalStyle()}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Loading state */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}
        
        {/* Image */}
        <img
          src={modalImg}
          alt="Modal"
          className={`max-w-full max-h-full object-contain transition-opacity duration-300 rounded-lg ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          style={{
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        />
        
        {/* Close button */}
        <button
          onClick={() => setModalImg(null)}
          className="absolute top-3 right-3 text-white bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Image info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm">Click outside to close</p>
        </div>
      </div>
    </div>
  );
};

export default ModalImage; 