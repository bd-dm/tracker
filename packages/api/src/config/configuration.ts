export default () => ({
  port: parseInt(process.env.API_PORT, 10) || 3000,
  host: process.env.API_HOST || '127.0.0.1',
  cron: process.env.API_SCPAPPER_CRON || '',
});
