import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import ChartBox from '../molecules/ChartBox';
import statsData from '../../data/statsData.json';
import './Stats.scss';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function Stats() {
  const { summary, onsiteVsTelework, commute, hoursOverTime } = statsData;

  const onsiteVsTeleworkData = {
    labels: ['On-site', 'Telework'],
    datasets: [
      {
        data: [onsiteVsTelework.onsite * 100, onsiteVsTelework.telework * 100],
        backgroundColor: ['#00A8A8', '#F08A5D'],
      },
    ],
  };

  const commuteData = {
    labels: commute.map((c) => c.method),
    datasets: [
      {
        data: commute.map((c) => c.value * 100),
        backgroundColor: ['#00A8A8', '#F08A5D', '#FBD148'],
      },
    ],
  };

  const hoursOverTimeData = {
    labels: hoursOverTime.map((h) => h.month),
    datasets: [
      {
        label: 'Worked',
        data: hoursOverTime.map((h) => h.worked),
        backgroundColor: '#00A8A8',
      },
      {
        label: 'Expected',
        data: hoursOverTime.map((h) => h.expected),
        backgroundColor: '#F08A5D',
      },
    ],
  };

  return (
    <section className="stats-section">
      <h3>My Work &amp; Commute Stats</h3>

      <p>{summary.description}</p>

      <div className="charts-row">
        <ChartBox
          chart={<Pie data={onsiteVsTeleworkData} />}
          description={`On-site ${(onsiteVsTelework.onsite * 100).toFixed(0)}% | Telework ${(onsiteVsTelework.telework * 100).toFixed(0)}%`}
        />
        <ChartBox
          chart={<Pie data={commuteData} />}
          description={commute.map((c) => `${c.method} ${(c.value * 100).toFixed(0)}%`).join(' | ')}
        />
        <ChartBox
          chart={<Bar data={hoursOverTimeData} />}
          description={`Hours Over Time (sample for ${hoursOverTime.length} months)`}
        />
      </div>
    </section>
  );
}

export default Stats;
