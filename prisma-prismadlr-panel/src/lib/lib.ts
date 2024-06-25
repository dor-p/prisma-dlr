import { getBackendSrv } from '@grafana/runtime';
export const production = window.location.origin !== 'http://localhost:3000';
export const ConfigDataSources = {
  production: 'I6gCZysSz',
  development: 'I6gCZysSz',
};
const mapSchemaToData = (schema: any, data: any): any[] => {
  const { fields } = schema;
  const { values } = data;

  const mappedData = values[0].map((_: any, index: any) => {
    const record: { [key: string]: any } = {};
    fields.forEach((field: any, fieldIndex: any) => {
      record[field.name] = values[fieldIndex][index];
    });
    return record;
  });

  return mappedData;
};
export const runQuery = async (query: string) => {
  try {
    const datasource = production ? ConfigDataSources.production : ConfigDataSources.development;
    const response: any = await getBackendSrv().post('/api/ds/query', {
      queries: [
        {
          refId: 'A',
          datasource: {
            type: 'PostgreSQL',
            uid: datasource,
          },
          rawSql: query,
          format: 'table',
        },
      ],
    });
    return mapSchemaToData(response.results.A.frames[0].schema, response.results.A.frames[0].data);
  } catch (e) {
    return null;
  }
};
