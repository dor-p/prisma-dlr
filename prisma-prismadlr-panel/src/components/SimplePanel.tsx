import React, { useEffect, useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';
import './../style.css';
import { MultiSelect } from './Dropdowns';
import FilterSort from 'icons/FilterSort';
import FilterStatus from './FilterStatus';
import ChartBox from './ChartBox';
import SideBar from './SideBar/SideBar';
import { getDevices, getUniqueDevices } from 'lib/dashboard';

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Heebo;
      position: relative;
      background: #323335;
      padding: 15px;
      display: flex;
      gap: 15px;
      flex-direction: row;
    `,
  };
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  const theme = useTheme2();
  const styles = useStyles2(getStyles);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeChart, setActiveChart] = useState<number>(0);
  const [deviceData, setDeviceData] = useState<any>([]);
  const [deviceNamesData, setDeviceNamesData] = useState<any>([]);

  // if (data.series.length === 0) {
  //   return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  // }
  useEffect(() => {
    const fetchDevices = async () => {
      setLoading(true);
      try {
        const devices = await getDevices();
        setDeviceData(devices);

        const device_names = await getUniqueDevices();
        setDeviceNamesData(device_names?.map((item: any) => item.device_name));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDevices();
  }, []);
  useEffect(() => {
    console.log(deviceData[activeChart]);
  }, [activeChart, deviceData]);

  const handleChartClick = (index: number) => {
    setActiveChart(index);
  };

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: 101%;
        `
      )}
    >
      {/* Container */}
      <div
        style={{
          width: '81%',
          background: 'black',
          height: '100%',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
        }}
      >
        <div style={{ width: '100%', padding: '0px 0px 10px 0px' }}>
          <span style={{ color: '#0093ee', fontWeight: 700 }}>Grid View </span>
          <span style={{ color: '#0093ee', fontWeight: 400 }}>(15)</span>
        </div>
        <div
          style={{
            width: '100%',
            background: '#1c1f21',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Filter Dropdowns */}
          <MultiSelect
            label="Rating"
            value={[]}
            options={['Rating 1', 'Rating 2']}
            handleChange={function (value: string[]): void {
              throw new Error('Function not implemented.');
            }}
          />
          <MultiSelect
            label="DLR/AAR"
            value={[]}
            options={['Rating 1', 'Rating 2']}
            handleChange={function (value: string[]): void {
              throw new Error('Function not implemented.');
            }}
          />
          <MultiSelect
            label="Active lines"
            value={[]}
            options={['Rating 1', 'Rating 2']}
            handleChange={function (value: string[]): void {
              throw new Error('Function not implemented.');
            }}
          />
          <MultiSelect
            label="Region"
            value={[]}
            options={['Rating 1', 'Rating 2']}
            handleChange={function (value: string[]): void {
              throw new Error('Function not implemented.');
            }}
          />
          <MultiSelect
            label="Circuit"
            value={[]}
            options={deviceNamesData}
            handleChange={function (value: string[]): void {
              throw new Error('Function not implemented.');
            }}
          />
          <FilterSort />
        </div>
        <div
          style={{
            height: '100%',
            background: '#1c1f21',
            padding: '10px',
            overflowY: 'hidden',
            overflowX: 'hidden',
            width: '100%',
          }}
        >
          <div style={{ background: '#18191b', padding: '0px 10px' }}>
            <FilterStatus />
          </div>
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#1c1f21',
              margin: '5px',
              pointerEvents: 'none',
              overflowY: 'scroll',
            }}
          >
            <Grid numRows={3} itemHeight={200}>
              {deviceData.map((deviceRow: any, index: number) => {
                return (
                  <ChartBox
                    data={deviceRow}
                    key={index}
                    onClick={() => handleChartClick(index)}
                    active={activeChart === index}
                  />
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
      {deviceData[activeChart] && (
        <div style={{ width: '19%', background: 'black', height: '100%', borderRadius: '10px', overflowY: 'scroll' }}>
          <SideBar activeDevice={deviceData[activeChart]} />
        </div>
      )}
      {/* Loading overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-content">
            <CustomSpinner />
            <p className="mt-4 text-white">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

const CustomSpinner = () => (
  <div className="spinner">
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
  </div>
);
const Grid: React.FC<any> = ({ numRows, children, itemHeight }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${2}, 50%)`,
        gridTemplateRows: `repeat(${numRows}, ${itemHeight}px)`,
        gap: '7px',
        width: '99%',
        marginBottom: '10px',
        pointerEvents: 'none',
        paddingBottom: '45px',
      }}
    >
      {children.map((child: any, index: number) => (
        <div
          key={index}
          style={{
            width: `100%`,
            height: `${itemHeight}px`,
            pointerEvents: 'none',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
