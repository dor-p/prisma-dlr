import React from 'react';
import InfoCard from './InfoCard';
import Header from './Header';
import Gauge from './Gauge';
import ConductorIcon from 'icons/ConductorIcon';
import LineIcon from 'icons/LineIcon';
import WeatherIcon from 'icons/WeatherIcon';
import ThermostatIcon from 'icons/ThermostatIcon';
import RainIcon from 'icons/RainIcon';

const SideBar = () => {
  return (
    <div style={{ padding: '12px' }}>
      <Header />
      <div className="grid-container">
        <div className="grid-item">
          <InfoCard icon={<ConductorIcon />} title="Conductor" tag="Critical Rating" content={<ConductorInfo />} />
        </div>
        <div className="grid-item">
          <InfoCard icon={<LineIcon />} title="Line" content={<LineInfo />} />
        </div>
        <div className="grid-item">
          <InfoCard icon={<WeatherIcon />} title="Weather" content={<WeatherInfo />} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

const ConductorInfo: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title">Type</div>
        <div className="info-subtitle">Copper</div>
      </div>
      <div className="info-item">
        <div className="info-title">Fallback rating</div>
        <div className="info-percentage">103.4%</div>
      </div>
    </div>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title">Cumulative gain</div>
        <div
          className="info-subtitle"
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', color: '#9D9898' }}>
            <span style={{ fontSize: '33px', height: '36px' }}>93</span>
            <span style={{ fontSize: '18px', textAlign: 'center' }}>Days</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: '#27D76A' }}>
            <span style={{ fontSize: '33px', height: '36px' }}>21.6%</span>
            <span style={{ fontSize: '18px', textAlign: 'center' }}>Gain</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: '#FFFFFF' }}>
            <span style={{ fontSize: '33px', height: '36px' }}>0.6%</span>
            <span style={{ fontSize: '18px', textAlign: 'center' }}>Risk</span>
          </div>
        </div>
      </div>
    </div>
    <div
      className="info-row"
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <div className="info-item">
        <div
          className="info-title"
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}
        >
          <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {' '}
            <ThermostatIcon />
            Temp
          </span>
        </div>
        <Gauge value={0} max={30} label="N/A" />
        <div style={{ width: '100%', textAlign: 'center', fontWeight: 600 }}>Overheat in: N/A</div>
      </div>
    </div>
  </div>
);
const LineInfo: React.FC = () => (
  <div>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title">Sag Distance</div>
        <div className="info-subtitle">N/A</div>
      </div>
      <div className="info-item">
        <div className="info-title">Critical Span</div>
        <div className="info-subtitle">#1235</div>
      </div>
    </div>
  </div>
);

const WeatherInfo: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title">
          <RainIcon />
        </div>
        <div className="info-title">2.5 mm/h</div>
      </div>
      <div className="info-item">
        <div className="info-subtitle" style={{ color: '#0093EE' }}>
          10 c
        </div>
        <div className="info-title">Feels like: 22c</div>
      </div>
    </div>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title">Wind Speed</div>
        <div className="info-subtitle">10 m/s</div>
      </div>
      <div className="info-item">
        <div className="info-title">Wind Angle</div>
        <div className="info-subtitle">100</div>
      </div>
    </div>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title">Solar Radiation Intensity</div>
        <div className="info-subtitle">1380 W/m2</div>
      </div>
    </div>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title">Humidity</div>
        <div className="info-subtitle">10%</div>
      </div>
      <div className="info-item">
        <div className="info-title">Air Pressure</div>
        <div className="info-subtitle">1100</div>
      </div>
    </div>
  </div>
);
