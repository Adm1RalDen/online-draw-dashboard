import { API } from "api/const";
import axios from "axios";
import { responseInterceptor } from "./interceptors/response";

export const Instance = axios.create({ baseURL: API });

Instance.interceptors.response.use(function (config) {
  return config;
}, responseInterceptor);
