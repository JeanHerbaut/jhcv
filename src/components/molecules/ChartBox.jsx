import React from 'react';
import './ChartBox.scss';

function ChartBox({ chart, description }) {
  return (
    <div className="chart-box">
      {chart}
      <p><strong>{description}</strong></p>
    </div>
  );
}

export default ChartBox;
