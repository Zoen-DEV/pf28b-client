import axios from "axios";

const animerceApp = axios.create({
  baseURL: `https://animemangaback-production-2576.up.railway.app/login`,
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
