import React from 'react';

const Gauge = ({ line_current, static_thermal_limit, thermal_current, max = 1500 }) => {
  const percentage = (line_current / max) * 100;
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

  const marker = (value, label, color, dashed = false, yOffset = 0, special = false) => {
    const markerAngle = Math.min(180, (180 * value) / max);
    const outerPoint = polarToCartesian(100, 100, 95, markerAngle);
    const innerPoint = polarToCartesian(100, 100, 65, markerAngle);

    return (
      <g>
        <line
          x1={innerPoint.x}
          y1={innerPoint.y}
          x2={outerPoint.x}
          y2={outerPoint.y}
          stroke={color}
          strokeWidth="2"
          strokeDasharray={dashed ? '1,1' : '0,0'} // Add this property to make the line dotted
        />
        <text
          x={outerPoint.x + (markerAngle > 90 ? 0 : 5)}
          y={outerPoint.y + yOffset}
          fill={color}
          fontSize="10"
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
            fontSize="10"
            textAnchor={markerAngle > 90 ? 'end' : 'start'}
            alignmentBaseline="middle"
          >
            DLR
          </text>
        )}
      </g>
    );
  };

  let graphColor = '#5bd276';
  if (line_current < static_thermal_limit) {
    graphColor = '#5bd276';
  } else if (line_current >= static_thermal_limit && line_current < thermal_current) {
    graphColor = '#ff6a00';
  } else if (line_current >= thermal_current) {
    graphColor = '#ff002f';
  }

  return (
    <svg width="210" height="130" viewBox="0 0 210 130">
      <path d={arcPath(0, 180, 80)} fill="#222529" stroke="#333" strokeWidth="20" />

      {/* Graph bar */}
      <path d={arcPath(0, (line_current / max) * 180, 80)} fill="#222529" stroke={graphColor} strokeWidth="20" />

      {marker(static_thermal_limit, `${static_thermal_limit.toFixed(0)}A`, '#3498db', true, -15, true)}
      {marker(thermal_current, `${thermal_current.toFixed(0)}A`, '#e74c3c', false, -25, true)}

      <text x="105" y="80" textAnchor="middle" fill="#ecf0f1" fontSize="13">
        Line load
      </text>
      <text x="105" y="101" textAnchor="middle" fill="#4caf50" fontSize="18" fontWeight="bold">
        {line_current.toFixed(0)}A/{percentage.toFixed(0)}%
      </text>
    </svg>
  );
};

export default Gauge;
