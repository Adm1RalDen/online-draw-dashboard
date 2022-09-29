import { API, SetHeaders, setRefreshToken } from 'api/const'
import { Instance } from 'api/instance'
import axios, { AxiosError } from 'axios'
import { getToken, saveUserInStorage } from 'services/token.service'
import { RefreshResponse } from 'types'

export const responseInterceptor = async (error: AxiosError) => {
  if (error.code === 'ERR_NETWORK' || error.response?.status === 500) {
    return Promise.reject(error)
  }

  if (error.response?.status === 401) {
    try {
      const token = getToken()
      if (token) {
        const refresh = await axios.post<RefreshResponse>(
          `${API}/user/refresh`,
          setRefreshToken(),
          SetHeaders()
        )
        const { token, user } = refresh.data
        saveUserInStorage({ user, token })
        if (error.config.headers) {
          error.config.headers['authorization'] = `Bearer ${token}`
        }
        return Instance.request(error.config)
      }
    } catch (e) {
      return Promise.reject(error)
    }
  }
  return Promise.reject(error)
}
