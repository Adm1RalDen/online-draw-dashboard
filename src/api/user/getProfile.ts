import { Instance } from 'api/instance'
import { AuthorizedUser } from 'types'

export const getProfile = async (id: string) => Instance.get<AuthorizedUser>(`/user/${id}`)
