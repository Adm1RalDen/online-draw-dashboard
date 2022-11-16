import { Instance } from 'api/instance'

import { UserRegistrationData } from 'pages/auth/types'

export const createUser = async (data: UserRegistrationData) => {
  return Instance.post('/user/registration', data)
}
