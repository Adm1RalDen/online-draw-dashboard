import { Instance } from 'api/instance'

export const activationAccountApi = async (link: string) => Instance.get(`/user/activate/${link}`)
