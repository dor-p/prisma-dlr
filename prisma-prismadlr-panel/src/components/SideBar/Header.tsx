import React from 'react';

const Header = ({ title }: any) => (
  <div className="sidebar-header">
    <h5 style={{ fontWeight: 600, color: '#ffffff' }}>{title}</h5>
    <div className="sidebar-header-info">
      <span style={{ fontWeight: 600 }}>N1</span>
      <span style={{ fontWeight: 600 }}>
        DV 440<span style={{ fontWeight: 400 }}>kv</span>
      </span>

      <span className="dlr-badge">DLR</span>
    </div>
  </div>
);

export default Header;
