import React from 'react';
import HalfPieChart from './HalfPieChart';
import ChartIcon from 'icons/ChartIcon';
import Gauge from './Gauge';

interface ChartBoxProps {
  data: any;
  active: boolean;
  onClick: () => void;
}

const ChartBox: React.FC<any> = ({ data, active, onClick }: ChartBoxProps) => {
  const labels = ['Line load', '600A', '700A DLR'];
  const colors = ['#D4AF37', '#FF6347', '#1E90FF'];
  const {
    device_name,
    thermal_current,
    line_current,
    static_thermal_limit,
    thermal_current_lower,
    thermal_current_upper,
    valid_for_timestamp,
    forecast_valid_for_timestamp,
    forecast_thermal_current,
  } = data;
  const pieChartData = [
    parseFloat(thermal_current).toFixed(3) || 0,
    parseFloat(thermal_current_lower).toFixed(3) || 0,
    parseFloat(thermal_current_upper).toFixed(3) || 0,
  ];

  const currentTime = new Date(valid_for_timestamp);
  const forecastTime = new Date(forecast_valid_for_timestamp);
  const timeIn3Hours = new Date(forecastTime.getTime() + 3 * 60 * 60 * 1000);

  return (
    <>
      <div
        style={{
          padding: '5px 7px',
          backgroundColor: '#2b2e34',
          color: '#fff',
          borderRadius: '6px',
          height: '100%',
          border: active ? '2px solid #088eea' : '2px solid transparent',
          pointerEvents: 'all',
        }}
        onClick={onClick}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '5px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 600 }}>{device_name}</span>
          <span style={{ borderRadius: '4px', padding: '4px', backgroundColor: '#204762', marginLeft: '20px' }}>N</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            background: '#222529',
            padding: '10px',
            height: '149px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                gap: '20px',
              }}
            >
              <div>
                <span style={{ fontWeight: 600 }}>N</span>
              </div>
              <div>
                <span style={{ fontWeight: 600 }}>DV 220</span>kv
              </div>
            </div>
            <div>
              {' '}
              {currentTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
              })}{' '}
              (now)
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {/* <HalfPieChart data={pieChartData} line_load={line_current} labels={labels} colors={colors} /> */}
            <Gauge
              line_current={line_current}
              static_thermal_limit={static_thermal_limit}
              thermal_current={thermal_current}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'end',
              gap: '5px',
              fontSize: '10px',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ fontWeight: 700, height: '25px', display: 'flex', alignItems: 'center' }}>+3h</div>
              <div
                style={{
                  backgroundColor: '#0A73B5',
                  padding: '3px 5px',
                  borderRadius: '5px',
                  gap: '15px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '13px' }}>
                  {forecast_thermal_current.toFixed(0)}
                  <span style={{ paddingTop: '3px', fontSize: '10px' }}>A/95%</span>
                </span>
                <span style={{ paddingTop: '3px' }}>
                  {timeIn3Hours.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                  })}
                </span>
              </div>
            </div>
            <ChartIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartBox;
