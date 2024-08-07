import React from 'react';
import InfoCard from './InfoCard';
import Header from './Header';
import Gauge from './Gauge';
import ConductorIcon from 'icons/ConductorIcon';
import LineIcon from 'icons/LineIcon';
import WeatherIcon from 'icons/WeatherIcon';
import ThermostatIcon from 'icons/ThermostatIcon';
import RainIcon from 'icons/RainIcon';

const SideBar = ({ activeDevice }: any) => {
  const {
    device_name,
    ambient_temperature,
    wind_speed,
    wind_direction,
    relative_humidity,
    air_pressure,
    solar_radiation_intensity,
    rain_intensity,
    span_number,
    static_thermal_limit,
    conductor_average_temperature,
    conductor_max_allowed_temperature,
  } = activeDevice;
  return (
    <div style={{ padding: '12px' }}>
      <Header title={device_name} />
      <div className="grid-container">
        <div className="grid-item">
          <InfoCard
            icon={<ConductorIcon />}
            title="Conductor"
            tag="Critical Rating"
            content={
              <ConductorInfo
                static_thermal_limit={static_thermal_limit}
                conductor_average_temperature={conductor_average_temperature}
                conductor_max_allowed_temperature={conductor_max_allowed_temperature}
              />
            }
          />
        </div>
        <div className="grid-item">
          <InfoCard icon={<LineIcon />} title="Line" content={<LineInfo span_number={span_number} />} />
        </div>
        <div className="grid-item">
          <InfoCard
            icon={<WeatherIcon />}
            title="Weather"
            content={
              <WeatherInfo
                wind_speed={wind_speed}
                wind_direction={wind_direction}
                solar_radiation_intensity={solar_radiation_intensity}
                relative_humidity={relative_humidity}
                air_pressure={air_pressure}
                ambient_temperature={ambient_temperature}
                rain_intensity={rain_intensity}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

const ConductorInfo = ({
  static_thermal_limit,
  conductor_average_temperature,
  conductor_max_allowed_temperature,
}: any) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
    <div className="info-row" style={{ height: '60px' }}>
      <div className="info-item" style={{ justifyContent: 'center' }}>
        <div className="info-title">Type</div>
        <div className="info-subtitle">Copper</div>
      </div>
      <div className="vertical-bar"></div>
      <div className="info-item">
        <div className="info-title">Fallback rating</div>
        <div className="info-percentage">{static_thermal_limit}%</div>
      </div>
    </div>
    <div className="info-row" style={{ height: '70px' }}>
      <div className="info-item" style={{ paddingTop: '28px' }}>
        <div className="info-title">Cumulative gain</div>
        <div
          className="info-subtitle"
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', color: '#9D9898', width: '100px', paddingLeft: '10px' }}
          >
            <span style={{ fontSize: '27px', height: '28px' }}>93</span>
            <span style={{ fontSize: '13px', textAlign: 'left', fontWeight: 600 }}>Days</span>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', color: '#27D76A', width: '100px', paddingLeft: '10px' }}
          >
            <span style={{ fontSize: '27px', height: '28px' }}>
              21.6
              <span style={{ fontSize: '15px' }}>%</span>
            </span>
            <span style={{ fontSize: '13px', textAlign: 'left', fontWeight: 600 }}>Gain</span>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', color: '#FFFFFF', width: '100px', paddingLeft: '10px' }}
          >
            <span style={{ fontSize: '27px', height: '28px' }}>
              0.6<span style={{ fontSize: '15px' }}>%</span>
            </span>
            <span style={{ fontSize: '13px', textAlign: 'left', fontWeight: 600 }}>Risk</span>
          </div>
        </div>
      </div>
    </div>
    <div
      className="info-row"
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <div className="info-item" style={{ paddingTop: '7px' }}>
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
        <Gauge value={conductor_average_temperature} max={conductor_max_allowed_temperature} label="N/A" />
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            fontWeight: 600,
            marginTop: '-27px',
            color: '#ffffff',
            fontSize: '10px',
          }}
        >
          Overheat in:
          <span
            style={{
              fontWeight: 600,
              color: '#ffffff',
              fontSize: '14px',
            }}
          >
            N/A
          </span>
        </div>
      </div>
    </div>
  </div>
);
const LineInfo = ({ span_number }: any) => (
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
          <span style={{ fontSize: '14px' }}>#</span>
          {span_number}
        </div>
      </div>
    </div>
  </div>
);

const WeatherInfo = ({
  wind_speed,
  wind_direction,
  solar_radiation_intensity,
  relative_humidity,
  air_pressure,
  ambient_temperature,
  rain_intensity,
}: any) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title" style={{ paddingLeft: '16px' }}>
          <RainIcon />
        </div>
        <div className="info-title" style={{ fontWeight: 600 }}>
          {rain_intensity}
          <span style={{ color: '#C3C3C3', fontWeight: 400 }}> mm/h</span>
        </div>
      </div>
      <div className="info-item">
        <div
          className="info-subtitle"
          style={{ color: '#0093EE', fontSize: '30px', fontWeight: 700, lineHeight: '1.3' }}
        >
          {ambient_temperature}°<span style={{ fontSize: '18px' }}>c</span>
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
          {parseFloat(wind_speed).toFixed(3)} <span style={{ fontSize: '18px', fontWeight: 500 }}>m/s</span>
        </div>
      </div>
      <div className="vertical-bar"></div>
      <div className="info-item">
        <div className="info-title" style={{ fontWeight: 300 }}>
          Wind Angle
        </div>
        <div className="info-subtitle" style={{ fontSize: '30px' }}>
          {wind_direction}°
        </div>
      </div>
    </div>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title" style={{ fontWeight: 300 }}>
          Solar Radiation Intensity
        </div>
        <div className="info-subtitle" style={{ fontSize: '30px' }}>
          {solar_radiation_intensity} <span style={{ fontSize: '18px', fontWeight: 500 }}>W/m2</span>
        </div>
      </div>
    </div>
    <div className="info-row">
      <div className="info-item">
        <div className="info-title" style={{ fontWeight: 300 }}>
          Humidity
        </div>
        <div className="info-subtitle" style={{ fontSize: '30px' }}>
          {relative_humidity}
          <span style={{ fontSize: '18px', fontWeight: 500 }}> %</span>
        </div>
      </div>
      <div className="vertical-bar"></div>
      <div className="info-item">
        <div className="info-title" style={{ fontWeight: 300 }}>
          Air Pressure
        </div>
        <div className="info-subtitle" style={{ fontSize: '30px' }}>
          {air_pressure}
          <span style={{ fontSize: '18px', fontWeight: 500 }}> hPa</span>
        </div>
      </div>
    </div>
  </div>
);
