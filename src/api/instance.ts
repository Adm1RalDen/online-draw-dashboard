import axios from 'axios'

import { API_URL } from 'api/const'

import { responseInterceptor } from './interceptors/response'

export const Instance = axios.create({ baseURL: API_URL })

Instance.interceptors.response.use(function (config) {
  return config
}, responseInterceptor)
