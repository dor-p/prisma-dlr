import { runQuery } from './lib';
export const getDevices = async () => {
  const deviceQuery = `
    select * from line_dtr_xcel limit 20
    `;
  const deviceResults = await runQuery(deviceQuery);
  return deviceResults;
};
