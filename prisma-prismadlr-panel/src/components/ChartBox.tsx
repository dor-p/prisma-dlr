import React from 'react';
import HalfPieChart from './HalfPieChart';

const ChartBox: React.FC = () => {
  const data = [590, 110, 100]; // Example data
  const labels = ['Line load', '600A', '700A DLR'];
  const colors = ['#D4AF37', '#FF6347', '#1E90FF'];

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: '10px',
        width: '400px',
        margin: 'auto',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span>Kfar Uriya - Sitria</span>
        <span>N</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div>N</div>
          <div>DV 220kv</div>
          <div>11:30 (now)</div>
        </div>
        <HalfPieChart data={data} labels={labels} colors={colors} />
        <div>
          <div>+3h</div>
          <div style={{ backgroundColor: '#1E90FF', padding: '5px', borderRadius: '5px' }}>650A/95% 13:30</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
