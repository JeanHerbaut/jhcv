import React from 'react';
import './AboutSection.scss';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      {/* Left Column - Text */}
      <div className="left-column">
        <div className="avatar-placeholder" /> {/* Added avatar placeholder */}
        <h2>À propos de moi</h2>
        <p>
          Je m’appelle <strong>Jean Herbaut</strong>. Business Analyst et Chef de projet digital passionné, j’ai à cœur de créer des ponts entre les besoins métiers et les solutions techniques.
        </p>
        <p>
          Avec plusieurs années d’expérience dans des contextes publics et privés, je suis à l’aise aussi bien dans l’analyse fonctionnelle que dans la coordination d’équipes techniques.
        </p>
        <p>
          J’aime rendre les projets concrets, simples à comprendre et utiles au quotidien.
        </p>
      </div>

      {/* Right Column - Key Facts */}
      <div className="right-column">
        <ul>
          <li>
            <span className="dot teal"></span>
            <span className="fact-text">Compétences : Gestion de projet, Analyse fonctionnelle, UX, Communication</span>
          </li>
          <li>
            <span className="dot coral"></span>
            <span className="fact-text">Langues : Français (natif), Anglais (courant), Espagnol (débutant)</span>
          </li>
          <li>
            <span className="dot gold"></span>
            <span className="fact-text">Basé à : Lausanne, Suisse</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
