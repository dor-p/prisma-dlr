import { runQuery } from './lib';
export const getDevices = async () => {
  const deviceQuery = `
    SELECT
    l.*, 
    c.static_thermal_limit,
    c.conductor_limit_temperature,
    c.is_fiber_monitored,
    c.is_aar,
    c.is_dlr,
    c.circuit_first_span_idx,
    c.circuit_last_span_idx,
    c.conductor_type,
    f.acquisition_timestamp AS forecast_acquisition_timestamp,
    f.valid_for_timestamp AS forecast_valid_for_timestamp,
    f.time_to_overheat AS forecast_time_to_overheat,
    f.thermal_current AS forecast_thermal_current,
    f.conductor_core_temperature AS forecast_conductor_core_temperature,
    f.conductor_skin_temperature AS forecast_conductor_skin_temperature,
    f.conductor_average_temperature AS forecast_conductor_average_temperature,
    f.ambient_temperature AS forecast_ambient_temperature,
    f.wind_speed AS forecast_wind_speed,
    f.wind_direction AS forecast_wind_direction
FROM 
    line_dtr_xcel l
LEFT JOIN 
    circuits_attributes_xcel c ON l.device_inst_id = c.device_inst_id
LEFT JOIN 
    line_dtr_forecast_xcel f ON l.device_inst_id = f.device_inst_id
LIMIT 30
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
