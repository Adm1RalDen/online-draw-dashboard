import { Instance } from 'api/instance'
import { RefreshResponse, User2FALoginResponse, UserLoginFormData } from 'types'

export const authorizeUser = async (data: UserLoginFormData) => {
  return Instance.post<RefreshResponse | User2FALoginResponse>('/user/login', {
    ...data
  })
}
