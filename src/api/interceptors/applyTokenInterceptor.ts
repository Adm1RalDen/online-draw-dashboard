import { AxiosRequestConfig } from 'axios'

import { setHeaders } from './../const'

export const applyTokenInterceptor = async (config: AxiosRequestConfig) => {
  config.headers = { ...config.headers, ...setHeaders().headers }
  return config
}
