import { AxiosRequestConfig } from 'axios'

import { getHeaders } from 'api/utils'

export const applyTokenInterceptor = async (config: AxiosRequestConfig) => {
  config.headers = { ...config.headers, ...getHeaders().headers }
  return config
}
