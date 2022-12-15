import { Instance } from 'api/instance'

import { AuthorizedUser } from 'types/user'

export const getProfile = async (id: string) => Instance.get<AuthorizedUser>(`/user/${id}`)
