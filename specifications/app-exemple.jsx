import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="main-container">
      {/* Animated Background Shape */}
      <div className="animated-bg-shape" />

      {/* Header / Hero Section */}
      <header className="hero-section">
        <h1>Jean Dupont</h1>
        <h2>Digital Project Manager &amp; Business Analyst</h2>
        <p>Bridging business and tech with data-driven strategies.</p>
      </header>

      {/* Main Content */}
      <main className="content-wrapper">
        {/* About & Experience Container */}
        <section className="about-experience">
          {/* About */}
          <div className="about-box">
            <h3>About</h3>
            <div className="avatar-bio">
              <div className="avatar-placeholder" />
              <p>
                A short bio about Jean, focusing on his passion for project
                management, business analysis, data, etc.
              </p>
            </div>

            <div className="skills">
              <strong>Skills</strong>
              <ul>
                <li>Project Management</li>
                <li>Business Analysis</li>
                <li>Data Analysis</li>
              </ul>
            </div>

            <div className="languages">
              <strong>Languages</strong>
              <ul>
                <li>English</li>
                <li>French</li>
                <li>Italian</li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="experience-box">
            <h3>Experience</h3>

            <div className="exp-card">
              <h4>Senior Project Manager</h4>
              <p><strong>XYZ Corp</strong></p>
              <p>• Employe outputment, lead xxec ciphst</p>
            </div>

            <div className="exp-card">
              <h4>Project Manager</h4>
              <p><strong>ABC Inc.</strong></p>
              <p>• Achieve, artsond developments</p>
            </div>
          </div>
        </section>

        {/* Work & Commute Stats */}
        <section className="stats-section">
          <h3>My Work &amp; Commute Stats</h3>
          <p>
            I track my hours, commutes, and telework vs onsite to stay productive and healthy.
            Here’s a quick overview of 2025 so far.
          </p>

          {/* Charts Row (Placeholder) */}
          <div className="charts-row">
            <div className="chart-box">
              <div className="chart-placeholder chart-1" />
              <p><strong>On-site 22% | Telework 78%</strong></p>
            </div>
            <div className="chart-box">
              <div className="chart-placeholder chart-2" />
              <p><strong>Train 50% | Bike 30% | Other 20%</strong></p>
            </div>
            <div className="chart-box">
              <div className="chart-placeholder chart-3" />
              <p><strong>Hours Over Time</strong></p>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Footer */}
      <footer className="footer">
        <h3>Contact</h3>
        <p>Ready to connect? Drop me a line.</p>
        <p>
          <strong>Email: </strong>
          <a href="mailto:jean.dupont@example.com">jean.dupont@example.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
