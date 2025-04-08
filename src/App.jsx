import React from 'react';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Header from './components/Header';
import './styles.scss'
import './components/AboutSection.scss';
import './components/Experience.scss';
import './components/Stats.scss';

function App() {
  return (
    <div className="main-container">
      <Header />
      {/* Animated BG shape */}
      <div className="animated-bg-shape"></div>
      <div className="animated-bg-shape-reversed"></div>

      <header className="hero-section">
        <h1>Jean Dupont</h1>
        <h2>Digital Project Manager &amp; Business Analyst</h2>
        <p>Bridging business and tech with data-driven strategies.</p>
      </header>

      <main className="content-wrapper">
        <AboutSection />
        <Experience />
        <Stats />
      </main>
    </div>
  );
}

export default App;
