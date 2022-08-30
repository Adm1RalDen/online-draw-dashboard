import { API, SetHeaders } from "api/const";
import { Instance } from "api/instance";
import axios, { AxiosError } from "axios";
import { getToken, saveUserInStorage } from "services/token.service";

export const responseInterceptor = async (error: AxiosError) => {
  if (error.code === "ERR_NETWORK" || error.response?.status === 500) {
    return Promise.reject(error);
  }

  if (error.response?.status === 401) {
    try {
      const token = getToken();
      if (token) {
        const refresh = await axios.get(`${API}/user/refresh`, {
          withCredentials: true,
          ...SetHeaders(),
        });
        saveUserInStorage(refresh.data);
        error.config.headers!["authorization"] = `Bearer ${refresh.data.token}`;
        return Instance.request(error.config);
      }
    } catch (e) {
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
};
