import { runQuery } from './lib';
export const getDevices = async () => {
  const deviceQuery = `
    select * from line_dtr_xcel order by insert_time desc limit 50
    `;
  const deviceResults = await runQuery(deviceQuery);
  return deviceResults;
};

export const getUniqueDevices = async () => {
  const deviceQuery = `
    SELECT DISTINCT device_name FROM line_dtr_xcel;
    `;
  const deviceResults = await runQuery(deviceQuery);
  return deviceResults;
};
