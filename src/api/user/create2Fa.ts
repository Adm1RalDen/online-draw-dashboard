import { Instance } from 'api/instance'

export const create2FaApi = (userId: string) => Instance.post('/user/create-2fa', { userId })
