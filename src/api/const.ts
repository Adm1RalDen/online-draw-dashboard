import { getRefreshToken, getToken } from 'services/token.service'

export const HOST = process.env.HOST || 'http://localhost:5000'
export const API = `${HOST}/api`

export const SetHeaders = () => ({
  headers: { authorization: `Bearer ${getToken()}` }
})

export const setRefreshToken = () => ({
  refreshToken: getRefreshToken()
})
