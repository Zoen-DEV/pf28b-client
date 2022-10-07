import axios from "axios";

const animerceApp = axios.create({
  baseURL: "http://localhost:3000/login",
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
