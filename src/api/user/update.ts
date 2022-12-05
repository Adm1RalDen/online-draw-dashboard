import { Instance } from 'api/instance'

import { AuthorizedUser } from 'types/user'

export const updateUser = async (data: FormData) =>
  Instance.put<AuthorizedUser>('/user/update', data)
