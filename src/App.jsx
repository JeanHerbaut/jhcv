import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Stats from './components/Stats';
import './styles.scss'

function App() {
  return (
    <div className="main-container">
      {/* Animated BG shape */}
      <div className="animated-bg-shape"></div>

      <header className="hero-section">
        <h1>Jean Dupont</h1>
        <h2>Digital Project Manager &amp; Business Analyst</h2>
        <p>Bridging business and tech with data-driven strategies.</p>
      </header>

      <main className="content-wrapper">
        <About />
        <Experience />
        <Stats />
      </main>

      <footer className="footer">
        <h3>Contact</h3>
        <p>Ready to connect? Drop me a line.</p>
        <p><strong>Email:</strong> jean.dupont@example.com</p>
      </footer>
    </div>
  );
}

export default App;
