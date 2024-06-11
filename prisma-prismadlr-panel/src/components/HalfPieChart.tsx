import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface HalfPieChartProps {
  data: number[];
  labels: string[];
  colors: string[];
}

const HalfPieChart: React.FC<HalfPieChartProps> = ({ data, labels, colors }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '50%',
  };

  return <Doughnut data={chartData} options={options} />;
};

export default HalfPieChart;
