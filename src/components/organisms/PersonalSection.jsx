import React from 'react';
import personalData from '../../data/personalData.json';
import '../../styles/PersonalSection.scss';
import FunFactsCarousel from './FunFactsCarousel';
import ImageGallery from './ImageGallery';

const PersonalSection = () => {
  return (
    <>
      <section className="personal-intro">
        <h2>{personalData.intro.title}</h2>
        <p>{personalData.intro.description}</p>
      </section>
      <section className="personal-passions" style={{ background: 'linear-gradient(135deg, #fafafa 30%, #e6f7f7 100%)' }}>
        {personalData.passions.map((passion, index) => (
          <div key={index} className="passion-item">
            <h3>{passion.icon} {passion.title}</h3>
            <p>{passion.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default PersonalSection;
