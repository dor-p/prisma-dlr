import React, { useState } from 'react';
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
  const [activeChart, setActiveChart] = useState<number>(0);
  // if (data.series.length === 0) {
  //   return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  // }

  const handleChartClick = (index: number) => {
    setActiveChart(index);
  };
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      {/* Container */}
      <div
        style={{
          width: '80%',
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
            options={['Rating 1', 'Rating 2']}
            handleChange={function (value: string[]): void {
              throw new Error('Function not implemented.');
            }}
          />
          <FilterSort />
        </div>
        <div style={{ height: '100%', background: '#1c1f21', padding: '10px', overflowY: 'hidden' }}>
          <div style={{ background: '#18191b', padding: '0px 10px' }}>
            <FilterStatus />
          </div>
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#1c1f21',
              margin: '10px',
              pointerEvents: 'none',
              overflowY: 'scroll',
            }}
          >
            <Grid numRows={3} itemHeight={255}>
              <ChartBox onClick={() => handleChartClick(0)} active={activeChart === 0} />
              <ChartBox onClick={() => handleChartClick(1)} active={activeChart === 1} />
              <ChartBox onClick={() => handleChartClick(2)} active={activeChart === 2} />
              <ChartBox onClick={() => handleChartClick(3)} active={activeChart === 3} />
              <ChartBox onClick={() => handleChartClick(4)} active={activeChart === 4} />
              <ChartBox onClick={() => handleChartClick(5)} active={activeChart === 5} />
            </Grid>
          </div>
        </div>
      </div>
      <div style={{ width: '20%', background: 'black', height: '100%', borderRadius: '10px', overflowY: 'scroll' }}>
        <SideBar />
      </div>
    </div>
  );
};

const Grid: React.FC<any> = ({ numRows, children, itemHeight }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${2}, 50%)`,
        gridTemplateRows: `repeat(${numRows}, ${itemHeight}px)`,
        gap: '10px',
        width: '98%',
        marginBottom: '10px',
        pointerEvents: 'none',
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
