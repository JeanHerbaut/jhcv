import React from 'react';
import AboutSection from './components/organisms/AboutSection';
import ExperienceCarousel from './components/organisms/ExperienceCarousel';
import Stats from './components/organisms/Stats';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import PersonalSection from './components/organisms/PersonalSection';
import FunFactsCarousel from './components/organisms/FunFactsCarousel';
import ImageGallery from './components/organisms/ImageGallery';
import cvData from './data/cvData.json';
import personalData from './data/personalData.json';
import './styles/styles.scss';

function App() {
  const [mode, setMode] = React.useState('pro');

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className={`main-container container ${mode}-mode`}>
      <Header onModeChange={handleModeChange} />
      <main className="content-wrapper">
        {mode === 'pro' ? (
          <>
            <AboutSection />
            <ExperienceCarousel experiences={cvData.professionalExperience} />
            <Stats />
          </>
        ) : (
          <>
            <PersonalSection />
            <FunFactsCarousel funFacts={personalData.funFacts} />
            <ImageGallery images={personalData.images} />
          </>
        )}
      </main>
      <Footer mode={mode} />
    </div>
  );
}

export default App;
