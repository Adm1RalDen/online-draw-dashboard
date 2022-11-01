import { Instance } from 'api/instance'

export const updateUser = async (data: FormData) => Instance.put('/user/update', data)
