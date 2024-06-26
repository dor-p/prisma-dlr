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
      padding: { top: 80, right: 20, bottom: 20, left: 20 }, // Increased top padding for labels
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

        // Calculate total value for percentage calculation
        const totalValue = data.reduce((sum, value) => sum + value, 0);

        // Draw labels with pointers
        let startAngle = Math.PI;
        chart.data.labels.forEach((label, index) => {
          const value = data[index];
          const sliceAngle = (value / totalValue) * Math.PI;
          const angle = startAngle - sliceAngle / 2;

          // Calculate the point on the arc
          const radius = chart.getDatasetMeta(0).data[index].outerRadius;
          const centerX = chart.getDatasetMeta(0).data[index].x;
          const centerY = chart.getDatasetMeta(0).data[index].y;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          // Draw pointer line
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(centerX, top - 30); // End point above the chart
          ctx.strokeStyle = colors[index];
          ctx.lineWidth = 2;
          ctx.stroke();

          // Draw label
          ctx.font = '12px Arial';
          ctx.fillStyle = colors[index];
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(`${label}: ${value} (${((value / totalValue) * 100).toFixed(1)}%)`, centerX, top - 35);

          startAngle -= sliceAngle;
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
    <div style={{ width: '400px', height: '300px', backgroundColor: 'transparent' }}>
      <Doughnut data={chartData} options={options} plugins={plugins} />
    </div>
  );
};

export default CustomDoughnutChart;
