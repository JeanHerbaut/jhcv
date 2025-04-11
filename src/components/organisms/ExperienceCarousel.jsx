// ExperienceCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../../styles/ExperienceCarousel.scss';

const CARD_WIDTH_DESKTOP = 300;
const AUTO_PLAY_INTERVAL = 5000;

function ExperienceCarousel({ experiences }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  
  // Pour le swipe
  const [touchStartX, setTouchStartX] = useState(null);

  const autoPlayRef = useRef(null);
  const length = experiences.length;

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(autoPlayRef.current);
    // eslint-disable-next-line
  }, []);

  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_INTERVAL);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayRef.current);
  };

  const handlePrev = () => {
    if (expandedIndex !== null) return; // pas de nav si carte étendue
    setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (expandedIndex !== null) return;
    setActiveIndex((prev) => (prev + 1) % length);
  };

  const handleExpand = (index) => {
    stopAutoPlay();
    setIsClosing(false);
    setExpandedIndex(index);
  };

  const handleReturn = () => {
    setIsClosing(true);
    setTimeout(() => {
      setExpandedIndex(null);
      setIsClosing(false);
      startAutoPlay();
    }, 300);
  };

  // Gestion du swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    stopAutoPlay(); // on stoppe l'auto-play pendant l'interaction
  };
  const handleTouchMove = () => {
    // on peut gérer un preview du drag si on veut
  };
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      // swipe vers la gauche => carte suivante
      handleNext();
    } else if (diff < -50) {
      // swipe vers la droite => carte précédente
      handlePrev();
    }
    setTouchStartX(null);
    startAutoPlay(); // on relance l'auto-play après le swipe
  };

  // Carte étendue en cours
  const expandedExp = expandedIndex !== null ? experiences[expandedIndex] : null;

  // Pour la barre de progression : (activeIndex+1)/length * 100
  const progressPercent = ((activeIndex + 1) / length) * 100;

  return (
    <section className="experience-carousel">
      {/* BOUTON PREV (desktop) */}
      {expandedIndex === null && (
        <button
          className="nav-button prev"
          onClick={handlePrev}
          aria-label="Previous experience"
        >
          &lt;
        </button>
      )}

      {/* SI PAS DE CARTE ÉTENDUE, ON AFFICHE LE CAROUSEL */}
      {expandedIndex === null && (
        <div
          className="carousel-window"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sur desktop, la largeur = nbCartes * 300px 
              Sur mobile, on prendra 100% via media query */}
          <div
            className="carousel-track"
            style={{
              width: `${length * CARD_WIDTH_DESKTOP}px`,
              transform: `translateX(-${activeIndex * CARD_WIDTH_DESKTOP}px)`,
            }}
          >
            {experiences.map((exp, index) => {
              const isActive = index === activeIndex;
              const { iconEmoji, role, organization, dates, shortDescription } = exp;

              return (
                <div
                  key={index}
                  className={`card ${isActive ? 'active' : ''}`}
                  style={{
                    width: `${CARD_WIDTH_DESKTOP}px`,
                  }}
                >
                  <div className="icon" aria-hidden="true">
                    {iconEmoji || '💼'}
                  </div>

                  <h3 className="title">{role}</h3>

                  {isActive && (
                    <>
                      <p className="company">{organization}</p>
                      <p className="period">{dates}</p>
                      <p className="description">{shortDescription}</p>

                      <button
                        className="know-more-btn"
                        onClick={() => handleExpand(index)}
                      >
                        Know more
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Barre de progression */}
          <div className="carousel-progress">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* CARTE ÉTENDUE (MODAL) */}
      {expandedExp && (
        <div
          className={`expanded-card ${isClosing ? 'closing' : 'open'}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="expanded-content">
            <h2>{expandedExp.role}</h2>
            <h4>{expandedExp.organization}</h4>
            <p className="period">{expandedExp.dates}</p>
            <p className="description">{expandedExp.shortDescription}</p>

            {/* Responsibilities */}
            {expandedExp.responsibilities && (
              <ul className="responsibilities">
                {expandedExp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* Skills (badges colorés) */}
            {expandedExp.skills && (
              <div className="skill-badges">
                {expandedExp.skills.map((skillObj, i) => (
                  <span
                    key={i}
                    className="skill-badge"
                    style={{ backgroundColor: skillObj.color }}
                  >
                    {skillObj.label}
                  </span>
                ))}
              </div>
            )}

            <button className="return-btn" onClick={handleReturn}>
              Return
            </button>
          </div>
        </div>
      )}

      {/* BOUTON NEXT (desktop) */}
      {expandedIndex === null && (
        <button
          className="nav-button next"
          onClick={handleNext}
          aria-label="Next experience"
        >
          &gt;
        </button>
      )}
    </section>
  );
}

export default ExperienceCarousel;
