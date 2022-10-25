import { getHeaders } from 'api/const'
import { AxiosRequestConfig } from 'axios'

export const applyTokenInterceptor = async (config: AxiosRequestConfig) => {
  config.headers = { ...config.headers, ...getHeaders().headers }
  return config
}
