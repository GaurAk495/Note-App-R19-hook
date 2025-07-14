import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.BACKEND_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
