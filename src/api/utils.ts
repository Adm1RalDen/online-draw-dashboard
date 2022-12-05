import { getRefreshToken, getToken } from 'services/token.service'

export const getHeaders = () => ({
  headers: { authorization: `Bearer ${getToken()}` }
})

export const setRefreshToken = () => ({
  refreshToken: getRefreshToken()
})
