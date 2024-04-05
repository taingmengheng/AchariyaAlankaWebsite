import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ translateType, translateValue, children }) => {
  
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.5s ease-out, visibility 0.5s ease-out, transform 0.5s ease-out',
        transform: isVisible ? 'none' : `translate${translateType}(${translateValue})`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;