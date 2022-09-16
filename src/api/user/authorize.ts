import { Instance } from 'api/instance'
import { RefreshResponse, UserLoginFormData } from 'types'

import { setRefreshToken } from './../const'

export const authorizeUser = async (data: UserLoginFormData) => {
  return Instance.post<RefreshResponse>('/user/login', { ...data, ...setRefreshToken() })
}
