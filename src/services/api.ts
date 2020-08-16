import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy2-server-deploy.herokuapp.com'
});

export default api;