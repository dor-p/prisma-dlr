import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartOptions, ArcElement, Chart } from 'chart.js';

Chart.register(ArcElement);

interface GaugeProps {
  value: number;
  max: number;
  label: string;
}

const Gauge: React.FC<GaugeProps> = ({ value, max, label }) => {
  const data = {
    datasets: [
      {
        data: [value, max - value],
        backgroundColor: ['#FF6666', '#3D4147'],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    rotation: -90,
    circumference: 180,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="gauge-container">
      <Doughnut data={data} options={options} />
      <div className="gauge-label">{label}</div>
    </div>
  );
};

export default Gauge;
