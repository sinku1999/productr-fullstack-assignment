import axios from "axios";

const api = axios.create({
  baseURL: "https://productr-backend-2j5f.onrender.com/api",
});

export const uploadBaseUrl =
  "https://productr-backend-2j5f.onrender.com/uploads";

export default api;