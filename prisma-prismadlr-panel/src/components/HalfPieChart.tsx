import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const HalfPieChart: React.FC = ({ data, line_load }: any) => {
  const labels = ['Line load', '600A', '700A DLR'];
  const colors = ['#BB9000', '#FF6666', '#3D4147'];

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        borderWidth: 0,
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
    cutout: '70%',
    layout: {
      padding: 10,
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const plugins = [
    {
      beforeDraw: (chart: any) => {
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;
        ctx.restore();
        const fontSize = (height / 114).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';

        const lineLoad = parseFloat(line_load).toFixed(0);
        const lineLoadText = `${lineLoad}A/${((Number(lineLoad) / 600) * 100).toFixed(0)}%`;
        const lineLoadTextX = Math.round((width - ctx.measureText(lineLoadText).width) / 2);
        const lineLoadTextY = height / 1.2;
        ctx.fillStyle = '#BB9000';
        ctx.fillText(lineLoadText, lineLoadTextX, lineLoadTextY);

        ctx.font = `${(height / 150).toFixed(2)}em sans-serif`;
        ctx.fillStyle = '#FFF';
        ctx.fillText('Line load', lineLoadTextX + 17, lineLoadTextY - 20);

        ctx.save();
      },
    },
  ];

  return (
    <div style={{ width: '250px', height: 'auto', backgroundColor: 'transparent' }}>
      <Doughnut data={chartData} options={options} plugins={plugins} />
    </div>
  );
};

export default HalfPieChart;
