import React from 'react';
import AboutSection from './components/organisms/AboutSection';
import Experience from './components/organisms/Experience';
import Stats from './components/organisms/Stats';
import Header from './components/organisms/Header';
import './styles.scss';

function App() {
  return (
    <div className="main-container">
      <Header />
      {/* Animated BG shape */}
      <div className="animated-bg-shape"></div>
      <div className="animated-bg-shape-reversed"></div>

      <main className="content-wrapper">
        <AboutSection />
        <Experience />
        <Stats />
      </main>
    </div>
  );
}

export default App;
