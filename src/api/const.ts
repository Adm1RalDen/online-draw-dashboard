import { getRefreshToken, getToken } from 'services/token.service'

export const DEFAULT_HOST_URL = 'http://localhost:5000'
export const SOCKET_HOST_URL = process.env.SOCKET_HOST || DEFAULT_HOST_URL
export const HOST_URL = process.env.HOST || DEFAULT_HOST_URL
export const API_URL = `${HOST_URL}/api`

export const getHeaders = () => ({
  headers: { authorization: `Bearer ${getToken()}` }
})

export const setRefreshToken = () => ({
  refreshToken: getRefreshToken()
})
