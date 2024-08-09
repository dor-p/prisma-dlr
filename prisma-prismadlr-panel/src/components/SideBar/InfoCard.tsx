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
      <h6
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          backgroundColor: '#323335',
          height: '20px',
          marginBottom: '0px',
        }}
      >
        <span style={{ height: '30px' }}>{icon}</span>
        {title}
      </h6>
      {tag && <Tag label={tag} backgroundColor="#F45F4F" />}
    </div>
    {content}
  </div>
);

export default InfoCard;
