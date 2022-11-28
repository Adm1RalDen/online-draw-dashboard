import { Instance } from 'api/instance'

import { AuthorizedUser } from 'types'

export const updateUser = async (data: FormData) =>
  Instance.put<AuthorizedUser>('/user/update', data)
