import axios from "axios";

const animerceApp = axios.create({
  baseURL: `${process.env.DB_ENDPOINT}login`,
});

animerceApp.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    // 'token': "ABC",
    token: localStorage.getItem("token"),
  };
  return config;
});

export default animerceApp;
