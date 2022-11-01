import { Instance } from 'api/instance'

import { AuthResponse, User2FALoginResponse, UserLoginFormData } from 'types'

export const authorizeUser = async (data: UserLoginFormData) =>
  Instance.post<AuthResponse | User2FALoginResponse>('/user/login', data)
