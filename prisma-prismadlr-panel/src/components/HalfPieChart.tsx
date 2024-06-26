import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';

ChartJS.register(ArcElement, Legend);

const CustomDoughnutChart = ({ data, line_load }: any) => {
  const labels = ['Thermal Current', 'Thermal Current Lower Limit', 'Thermal Current Upper Limit'];
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

  const options = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '70%',
    layout: {
      padding: 50, // Increased padding to accommodate labels
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
      id: 'customLabelsPlugin',
      afterDraw: (chart) => {
        const {
          ctx,
          chartArea: { top, bottom, left, right, width, height },
        } = chart;
        ctx.save();

        // Draw labels with arrows
        chart.data.labels.forEach((label, index) => {
          const meta = chart.getDatasetMeta(0);
          const arc = meta.data[index];
          const angle = Math.PI - arc.startAngle - (arc.endAngle - arc.startAngle) / 2;
          const x = chart.getDatasetMeta(0).data[index].x;
          const y = chart.getDatasetMeta(0).data[index].y;

          // Draw arrow
          ctx.beginPath();
          ctx.moveTo(x, y);
          const arrowLength = 30;
          const arrowX = x + Math.cos(angle) * arrowLength;
          const arrowY = y + Math.sin(angle) * arrowLength;
          ctx.lineTo(arrowX, arrowY);
          ctx.strokeStyle = colors[index];
          ctx.lineWidth = 2;
          ctx.stroke();

          // Draw label
          ctx.font = '12px Arial';
          ctx.fillStyle = colors[index];
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const labelX = x + Math.cos(angle) * (arrowLength + 10);
          const labelY = y + Math.sin(angle) * (arrowLength + 10);
          ctx.fillText(label, labelX, labelY);
        });

        // Draw line load text
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

        ctx.restore();
      },
    },
  ];

  return (
    <div style={{ width: '300px', height: '200px', backgroundColor: 'transparent' }}>
      <Doughnut data={chartData} options={options} plugins={plugins} />
    </div>
  );
};

export default CustomDoughnutChart;
