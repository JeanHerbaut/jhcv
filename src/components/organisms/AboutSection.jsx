// AboutSection.jsx
import React from 'react';
import '../../styles/AboutSection.scss';
import cvData from '../../data/cvData.json';
import avatar from '../../assets/avatar.png';

function AboutSection() {
  const { name, title, profile, contact, languages } = cvData;

  return (
    <section id="about" className="about-section">
      <div className="about-card">
          <div className="avatar">
            <img src={avatar} alt="Photo Jean" />
          </div>

          {/* Contenu principal */}
        <div className="about-content">
          <h2 className="about-title">{name}</h2>
          <h3 className="about-subtitle">{title}</h3>

          <p className="about-paragraph">{profile}</p>
        </div>

        {/* Facts / Key informations */}
        <ul className="about-facts">
          <li>
            <span className="icon">📞</span>
            <strong>Contact</strong>: {contact.phone}, {contact.email}
          </li>
          <li>
            <span className="icon">🌍</span>
            <strong>Langues</strong>: {languages.map(lang => `${lang.language} (${lang.proficiency})`).join(', ')}
          </li>
          <li>
            <span className="icon">📍</span>
            <strong>Localisation</strong>: {contact.location}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
