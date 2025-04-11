import React from 'react';
import AboutSection from './components/organisms/AboutSection';
import ExperienceCarousel from './components/organisms/ExperienceCarousel';
import Stats from './components/organisms/Stats';
import Footer from './components/organisms/Footer';
import cvData from './data/cvData.json';
import './styles/styles.scss';

function App() {
  return (
    <div className="main-container container">
      <main className="content-wrapper">
        <AboutSection />
        <ExperienceCarousel experiences={cvData.professionalExperience} />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

export default App;
