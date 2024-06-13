import Tag from 'components/Tag';
import React from 'react';

interface InfoCardProps {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  tag?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, content, tag }) => (
  <div className="info-card">
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#323335',
      }}
    >
      <h6 style={{ display: 'flex', alignItems: 'center', fontSize: '20px', gap: '5px', backgroundColor: '#323335' }}>
        {icon}
        {title}
      </h6>
      {tag && <Tag label={tag} backgroundColor="#F45F4F" />}
    </div>
    {content}
  </div>
);

export default InfoCard;
