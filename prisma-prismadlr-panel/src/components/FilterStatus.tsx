import React from 'react';
import TagList from './TagList';

const FilterStatus: React.FC = () => {
  const tags = [
    { label: 'Low Rating', backgroundColor: '#75858e' },
    { label: '30/50' },
    { label: 'High Rating', backgroundColor: '#bb9000' },
    { label: '10/50' },
    { label: 'Critical Rating', backgroundColor: '#f45f4f' },
    { label: '10/50' },
    { label: 'DLR', backgroundColor: '#0c5584' },
    { label: '30/50' },
    { label: '400A', backgroundColor: '#242527' },
    { label: '30/50' },
    { label: '220A', backgroundColor: '#242527' },
    { label: '10/50' },
    { label: '100A', backgroundColor: '#242527' },
    { label: '10/50' },
    { label: 'North' },
    { label: '20/50' },
    { label: 'Center' },
    { label: '10/50' },
    { label: 'South' },
    { label: '10/50' },
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '5px 0px' }}>
      <div style={{ color: '#fff', display: 'flex', alignItems: 'center', overflowY: 'scroll' }}>
        <div style={{ marginRight: '10px', fontWeight: '700' }}>Total:</div>
        <TagList tags={tags} />
      </div>
      <div
        style={{
          marginLeft: '10px',
          color: '#1E90FF',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          width: '83px',
        }}
      >
        Clear filters
      </div>
    </div>
  );
};

export default FilterStatus;
