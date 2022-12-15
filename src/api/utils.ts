import { getToken } from 'services/token.service'

export const getHeaders = () => ({
  headers: { authorization: `Bearer ${getToken()}` }
})
