import React from 'react';

function Stats() {
  return (
    <section className="stats-section">
      <h3>My Work &amp; Commute Stats</h3>
      <p>I track my hours, commutes, etc.</p>
      {/* Graph placeholders or Chart.js integration */}
      <div className="charts-row">
        <div className="chart-placeholder" />
        <div className="chart-placeholder" />
        <div className="chart-placeholder" />
      </div>
    </section>
  );
}

export default Stats;
