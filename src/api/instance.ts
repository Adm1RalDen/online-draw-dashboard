import axios from 'axios'

import { API_URL } from 'api/const'

import { applyTokenInterceptor } from './interceptors/applyTokenInterceptor'
import { refreshTokenInterceptor } from './interceptors/refreshTokenInterceptor'

export const Instance = axios.create({ baseURL: API_URL })

Instance.interceptors.request.use(applyTokenInterceptor, undefined)
Instance.interceptors.response.use(undefined, refreshTokenInterceptor)
