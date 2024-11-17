import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.100.42:8081', // Cambia 'localhost' por '10.0.2.2' si estás usando un emulador de Android
  timeout: 4000, // Tiempo de espera de 10 segundos
  headers: { 'Content-Type': 'application/json' },
});

export default instance;