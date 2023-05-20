import axios from "axios";

const instance = axios.create({
  baseURL: "https://fe-screening.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});

instance.interceptors.request.use(
  (config) => {
    const session = sessionStorage.getItem('session');

    if (session) {
      config.headers['Authorization'] = `Bearer ${session}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
});

export default instance;