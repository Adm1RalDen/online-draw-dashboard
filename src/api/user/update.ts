import { SetHeaders } from 'api/const'
import { Instance } from 'api/instance'
import { AuthorizedUser } from 'types'

export const updateUser = async (data: Partial<Omit<AuthorizedUser, 'id' | 'role' | 'email'>>) => {
  return Instance.put('/user/update', data, SetHeaders())
}
