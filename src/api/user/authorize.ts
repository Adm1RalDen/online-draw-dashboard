import { Instance } from 'api/instance'

import { UserLoginData } from 'pages/auth/types'

import { AuthResponse, User2FALoginResponse } from 'types/user'

export const authorizeUser = async (data: UserLoginData) =>
  Instance.post<AuthResponse | User2FALoginResponse>('/user/login', data)
