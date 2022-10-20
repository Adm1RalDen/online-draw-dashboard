import { Instance } from 'api/instance'

export const create2FaApi = (id: string) => Instance.post('/user/create-2fa', { userId: id })
