import React, { useRef, useEffect, useState } from 'react';

const LazyImage = ({ src, alt, style, className, onLoad, placeholder }) => {
  const imgRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(placeholder || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23f0f0f0" width="100%25" height="100%25"/%3E%3C/svg%3E');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgSrc(src);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <img
      ref={imgRef}
      src={imgSrc}
      alt={alt}
      style={style}
      className={className}
      onLoad={handleLoad}
      loading="lazy"
    />
  );
};

export default LazyImage;
