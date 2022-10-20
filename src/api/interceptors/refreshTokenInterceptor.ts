import { API_URL, setHeaders, setRefreshToken } from 'api/const'
import { Instance } from 'api/instance'
import axios, { AxiosError } from 'axios'
import { NetworkStatus } from 'const/enums'
import { getToken, saveUserInStorage } from 'services/token.service'
import { AuthResponse } from 'types'

export const refreshTokenInterceptor = async (error: AxiosError) => {
  if (error.response?.status === NetworkStatus.INTERNAL) {
    return Promise.reject(error)
  }

  if (error.response?.status === NetworkStatus.UNAUTHORITHED) {
    try {
      const token = getToken()

      if (token) {
        const refresh = await axios.post<AuthResponse>(
          `${API_URL}/user/refresh`,
          setRefreshToken(),
          setHeaders()
        )

        const { token, user } = refresh.data
        saveUserInStorage({ user, token })

        if (error.config.headers) {
          error.config.headers['authorization'] = `Bearer ${token}`
        }

        return Instance.request(error.config)
      }
    } catch (e) {
      /* will be dispatch(LogOut) in next pr DD-13 */
      return Promise.reject(error)
    }
  }
  return Promise.reject(error)
}
