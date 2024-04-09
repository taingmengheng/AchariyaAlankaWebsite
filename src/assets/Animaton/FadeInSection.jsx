import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ delay, translateType, translateValue, children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
          }, delay);
        } else {
          setVisible(false); // Reset isVisible state when component is not visible
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
        setVisible(false); // Reset isVisible state when component is unobserved
      }
    };
  }, [delay]);

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
