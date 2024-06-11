import React from 'react';
import Tag from './Tag';

const TagList: React.FC<any> = ({ tags }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      {tags.map((tag: any, index: number) => (
        <Tag key={index} label={tag.label} backgroundColor={tag?.backgroundColor ?? 'transparent'} />
      ))}
    </div>
  );
};

export default TagList;
