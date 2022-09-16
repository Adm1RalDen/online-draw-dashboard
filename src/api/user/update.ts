import { SetHeaders } from 'api/const'
import { Instance } from 'api/instance'

export const updateUser = async (data: FormData) => {
  return Instance.put('/user/update', data, SetHeaders())
}
