import { DEFAULT_HOST_URL } from 'const/urls'

import { getRefreshToken, getToken } from 'services/token.service'

export const SOCKET_HOST_URL = process.env.SOCKET_HOST || DEFAULT_HOST_URL
export const HOST_URL = process.env.HOST || DEFAULT_HOST_URL
export const API_URL = `${HOST_URL}/api`

export const SetHeaders = () => ({
  headers: { authorization: `Bearer ${getToken()}` }
})

export const setRefreshToken = () => ({
  refreshToken: getRefreshToken()
})
