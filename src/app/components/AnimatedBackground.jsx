'use client';
import { useEffect, useRef, useState } from 'react';

const AnimatedBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Check device capabilities and user preferences
    const isLowEndDevice = () => {
      return navigator.hardwareConcurrency <= 4 || 
             navigator.deviceMemory <= 4 || 
             window.innerWidth < 768;
    };

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLowEndDevice()) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (vantaRef.current) {
      observer.observe(vantaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    // Dynamically import vanta and three to avoid SSR issues
    const loadVanta = async () => {
      try {
        const VANTA = await import('vanta/dist/vanta.clouds.min.js');
        const THREE = await import('three');
        
        if (vantaRef.current && !vantaEffect.current) {
          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            backgroundColor: 0xfff8f8,
            skyColor: 0xf7ddd6,
            cloudColor: 0x9fc2e3,
            cloudShadowColor: 0x133152,
            sunColor: 0xff6633,
            sunGlareColor: 0xff9933,
            sunlightColor: 0xff9933,
            speed: 0.3, // Further reduced speed
            // Enhanced performance optimizations
            scale: 0.8, // Reduced scale for better performance
            scaleMobile: 0.5, // Even lower quality on mobile
            forceAnimate: false,
            fps: 24, // Reduced to cinematic FPS
            // Additional optimizations
            points: 8, // Reduce number of cloud points
            maxDistance: 15, // Reduce interaction distance
            spacing: 12, // Increase spacing between elements
            // Memory management
            antialias: false, // Disable antialiasing for performance
            alpha: true,
            premultipliedAlpha: false
          });

          // Pause animation when tab is not visible
          const handleVisibilityChange = () => {
            if (vantaEffect.current) {
              if (document.hidden) {
                vantaEffect.current.pause?.();
              } else {
                vantaEffect.current.play?.();
              }
            }
          };

          document.addEventListener('visibilitychange', handleVisibilityChange);
          
          // Store the cleanup function
          vantaEffect.current.cleanup = () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
          };
        }
      } catch (error) {
        console.warn('Failed to load animated background:', error);
      }
    };

    // Add a delay to prevent blocking initial render
    const timer = setTimeout(loadVanta, 200);

    return () => {
      clearTimeout(timer);
      if (vantaEffect.current) {
        vantaEffect.current.cleanup?.();
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [shouldLoad]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ 
        zIndex: -1,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        // Additional CSS optimizations
        transform: 'translateZ(0)', // Force hardware acceleration
        WebkitTransform: 'translateZ(0)',
        opacity: shouldLoad ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
    />
  );
};

export default AnimatedBackground; 