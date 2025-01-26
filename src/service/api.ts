import axios from "axios";

const BASE_URL = "https://api.unsplash.com";

const app = axios.create({
  baseURL: BASE_URL,
});

const api = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default api;
