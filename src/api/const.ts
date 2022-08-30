import { getToken } from "services/token.service";

export const HOST = process.env.HOST;
export const API = `${HOST}/api`;

export const SetHeaders = () => ({
  headers: { authorization: `Bearer ${getToken()}` },
});
