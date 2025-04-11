import React from 'react';

function ChartBox({ chart, description }) {
  return (
    <div className="chart-box">
      {chart}
      <p><strong>{description}</strong></p>
    </div>
  );
}

export default ChartBox;
