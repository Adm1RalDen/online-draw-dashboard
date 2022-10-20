import { UserReducerInitialTypes } from './types/user.types'

export const USER_SLICE = 'user'
export const TWOFA_SLICE = 'twoFa'

export const defaultUserData = {
  id: '',
  avatar: '',
  originalAvatar: '',
  backgroundFon: '',
  name: '',
  role: '',
  email: '',
  country: '',
  city: '',
  color: '',
  gender: '',
  date: '',
  biography: '',
  isUse2FA: false
}

export const userInitialState: UserReducerInitialTypes = {
  isAuth: false,
  error: undefined,
  isLoading: false,
  token: undefined,
  hasUserStateLoaded: false,
  data: {
    id: '',
    avatar: '',
    backgroundFon: '',
    originalAvatar: '',
    name: '',
    role: '',
    email: '',
    country: '',
    city: '',
    color: '',
    gender: '',
    date: '',
    biography: '',
    isUse2FA: false
  }
}
