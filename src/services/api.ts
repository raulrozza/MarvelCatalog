import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
});

api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.apikey = process.env.REACT_APP_PUBLIC_KEY;
  return config;
});

export default api;
