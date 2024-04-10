import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000" // Cập nhật baseURL của bạn
});

export default axiosInstance;
