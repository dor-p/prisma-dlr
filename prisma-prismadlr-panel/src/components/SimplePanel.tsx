import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';
import './../style.css';
import { MultiSelect } from './Dropdowns';
import FilterSort from 'icons/FilterSort';
import FilterStatus from './FilterStatus';

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

  // if (data.series.length === 0) {
  //   return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  // }

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
        <div style={{ height: '100%', background: '#1c1f21', padding: '10px' }}>
          <div style={{ background: '#18191b', padding: '0px 10px' }}>
            <FilterStatus />
          </div>
          <div style={{ width: '100%', background: '#1c1f21', overflow: 'scroll', margin: '10px' }}>
            Results scrollable
          </div>
        </div>
      </div>
      <div style={{ width: '20%', background: 'black', height: '100%', borderRadius: '10px' }}></div>
    </div>
  );
};
