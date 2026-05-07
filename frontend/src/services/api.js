import axios from 'axios';

const API = axios.create({
  baseURL:
    'https://team-task-manager-production-42a9.up.railway.app/api',
});

export default API;