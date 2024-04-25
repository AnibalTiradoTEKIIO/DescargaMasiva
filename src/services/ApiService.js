// services/ApiService.js
import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'https://descargamasiva.pade.mx/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiService;
