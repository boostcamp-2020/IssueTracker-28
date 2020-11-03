import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: localStorage.getItem('auth_token'),
  },
});

export default API;
