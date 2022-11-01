import { AxiosRequestConfig } from 'axios'

import { getHeaders } from 'api/const'

export const applyTokenInterceptor = async (config: AxiosRequestConfig) => {
  config.headers = { ...config.headers, ...getHeaders().headers }
  return config
}
