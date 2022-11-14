import { Instance } from 'api/instance'

import { UserRegistrationData } from 'types'

export const registrationUser = async (data: UserRegistrationData & { captcha: string }) => {
  return Instance.post('/user/registration', data)
}
