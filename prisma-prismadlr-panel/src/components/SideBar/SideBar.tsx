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
      <div className="vertical-bar"></div>
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
          <div
            style={{ display: 'flex', flexDirection: 'column', color: '#9D9898', width: '100px', paddingLeft: '10px' }}
          >
            <span style={{ fontSize: '33px', height: '36px' }}>93</span>
            <span style={{ fontSize: '16px', textAlign: 'left', fontWeight: 300 }}>Days</span>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', color: '#27D76A', width: '100px', paddingLeft: '10px' }}
          >
            <span style={{ fontSize: '33px', height: '36px' }}>
              21.6
              <span style={{ fontSize: '15px' }}>%</span>
            </span>
            <span style={{ fontSize: '16px', textAlign: 'left', fontWeight: 300 }}>Gain</span>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', color: '#FFFFFF', width: '100px', paddingLeft: '10px' }}
          >
            <span style={{ fontSize: '33px', height: '36px' }}>
              0.6<span style={{ fontSize: '15px' }}>%</span>
            </span>
            <span style={{ fontSize: '16px', textAlign: 'left', fontWeight: 300 }}>Risk</span>
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
        <div className="info-subtitle" style={{ fontSize: '28px' }}>
          N/A
        </div>
      </div>
      <div className="vertical-bar"></div>
      <div className="info-item">
        <div className="info-title">Critical Span</div>
        <div className="info-subtitle" style={{ fontSize: '28px' }}>
          <span style={{ fontSize: '14px' }}>#</span>1235
        </div>
      </div>
    </div>
  </div>
);

const WeatherInfo: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title" style={{ paddingLeft: '16px' }}>
          <RainIcon />
        </div>
        <div className="info-title" style={{ fontWeight: 600 }}>
          2.5
          <span style={{ color: '#C3C3C3', fontWeight: 400 }}> mm/h</span>
        </div>
      </div>
      <div className="info-item">
        <div
          className="info-subtitle"
          style={{ color: '#0093EE', fontSize: '30px', fontWeight: 700, lineHeight: '1.3' }}
        >
          10°<span style={{ fontSize: '18px' }}>c</span>
        </div>
        <div className="info-title" style={{ color: '#C3C3C3' }}>
          Feels like: 22°C
        </div>
      </div>
    </div>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title" style={{ fontWeight: 300 }}>
          Wind Speed
        </div>
        <div className="info-subtitle" style={{ fontSize: '30px' }}>
          10 <span style={{ fontSize: '18px', fontWeight: 500 }}>m/s</span>
        </div>
      </div>
      <div className="vertical-bar"></div>
      <div className="info-item">
        <div className="info-title" style={{ fontWeight: 300 }}>
          Wind Angle
        </div>
        <div className="info-subtitle" style={{ fontSize: '30px' }}>
          100°
        </div>
      </div>
    </div>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title" style={{ fontWeight: 300 }}>
          Solar Radiation Intensity
        </div>
        <div className="info-subtitle" style={{ fontSize: '30px' }}>
          1380 <span style={{ fontSize: '18px', fontWeight: 500 }}>W/m2</span>
        </div>
      </div>
    </div>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title" style={{ fontWeight: 300 }}>
          Humidity
        </div>
        <div className="info-subtitle" style={{ fontSize: '30px' }}>
          10<span style={{ fontSize: '18px', fontWeight: 500 }}> %</span>
        </div>
      </div>
      <div className="vertical-bar"></div>
      <div className="info-item">
        <div className="info-title" style={{ fontWeight: 300 }}>
          Air Pressure
        </div>
        <div className="info-subtitle" style={{ fontSize: '30px' }}>
          1100
          <span style={{ fontSize: '18px', fontWeight: 500 }}> hPa</span>
        </div>
      </div>
    </div>
  </div>
);