import { AuthorizedUser } from 'types'

export type UserCabinetTypes = Omit<
  AuthorizedUser,
  'id' | 'role' | 'email' | 'avatar' | 'backgroundFon' | 'biography' | 'originalAvatar' | 'isUse2FA'
>

export type InitialStateTypes = {
  name: string
  country: string
  city: string
  color: string
  gender: string
  date: string
  isUse2FA: boolean
}
