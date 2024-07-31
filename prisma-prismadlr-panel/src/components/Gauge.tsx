import React from 'react';

const Gauge = ({ value, max = 800 }) => {
  const percentage = (value / max) * 100;
  const angle = Math.min(180, (180 * percentage) / 100);

  const arcPath = (startAngle, endAngle, radius) => {
    const start = polarToCartesian(100, 100, radius, endAngle);
    const end = polarToCartesian(100, 100, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const marker = (value, label, color, yOffset = 0, special = false) => {
    const markerAngle = Math.min(180, (180 * value) / max);
    const outerPoint = polarToCartesian(100, 100, 80, markerAngle);
    const innerPoint = polarToCartesian(100, 100, 60, markerAngle);
    return (
      <g>
        <line x1={innerPoint.x} y1={innerPoint.y} x2={outerPoint.x} y2={outerPoint.y} stroke={color} strokeWidth="2" />
        <text
          x={outerPoint.x + (markerAngle > 90 ? -5 : 5)}
          y={outerPoint.y + yOffset}
          fill={color}
          fontSize="12"
          textAnchor={markerAngle > 90 ? 'end' : 'start'}
          alignmentBaseline="middle"
        >
          {label}
        </text>
        {special && (
          <text
            x={outerPoint.x + (markerAngle > 90 ? -5 : 5)}
            y={outerPoint.y + yOffset + 15}
            fill={color}
            fontSize="12"
            textAnchor={markerAngle > 90 ? 'end' : 'start'}
            alignmentBaseline="middle"
          >
            DLR
          </text>
        )}
      </g>
    );
  };

  return (
    <svg width="200" height="120" viewBox="0 0 200 120">
      <path d={arcPath(0, 180, 70)} fill="#ff6699" stroke="#333" strokeWidth="20" />
      <path d={arcPath(0, angle, 70)} fill="#ffeb00" stroke="#4caf50" strokeWidth="20" strokeLinecap="round" />
      {marker(600, '600A', '#e74c3c')}
      {marker(700, '700A', '#3498db', -15, true)}
      {marker(800, '800A', '#e74c3c')}
      <text x="100" y="85" textAnchor="middle" fill="#ecf0f1" fontSize="14">
        Line load
      </text>
      <text x="100" y="105" textAnchor="middle" fill="#4caf50" fontSize="24" fontWeight="bold">
        {value}A/{percentage.toFixed(0)}%
      </text>
    </svg>
  );
};

export default Gauge;
