import { AuthorizedUser } from 'types'

export type UserCabinetTypes = Omit<
  AuthorizedUser,
  'id' | 'role' | 'email' | 'avatar' | 'backgroundFon' | 'biography' | 'originalAvatar'
>
export type InitialStateTypes = {
  name: string
  country: string
  city: string
  color: string
  gender: string
  date: string
}
