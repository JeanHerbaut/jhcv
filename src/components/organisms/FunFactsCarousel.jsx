import React, { useState, useEffect } from 'react';
import '../../styles/FunFactsCarousel.scss';

const FunFactsCarousel = ({ funFacts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [funFacts.length]);

  return (
    <div className="fun-facts-carousel">
      <div className="fun-fact">
        <p>{funFacts[currentIndex]}</p>
      </div>
      <div className="carousel-controls">
        {funFacts.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FunFactsCarousel;
