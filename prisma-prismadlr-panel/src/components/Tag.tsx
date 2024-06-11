import React from 'react';

interface TagProps {
  label: string;
  backgroundColor?: string;
}

const Tag: React.FC<TagProps> = ({ label, backgroundColor }) => {
  const [mainLabel, subLabel] = label.split('/');
  const tagStyle = {
    backgroundColor,
    padding: '3px 10px',
    borderRadius: '5px',
    color: '#fff',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  };

  return (
    <div style={tagStyle}>
      {mainLabel && <span style={{ fontWeight: 600 }}>{mainLabel}</span>}
      {subLabel && <span>{`/${subLabel}`}</span>}
    </div>
  );
};

export default Tag;
