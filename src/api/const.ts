import { getRefreshToken, getToken } from 'services/token.service'

export const SOCKET_HOST_URL = process.env.SOCKET_HOST || ''
export const HOST_URL = process.env.HOST || ''
export const API_URL = `${HOST_URL}/api`

export const getHeaders = () => ({
  headers: { authorization: `Bearer ${getToken()}` }
})

export const setRefreshToken = () => ({
  refreshToken: getRefreshToken()
})
