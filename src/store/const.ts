import { UserReducerInitialTypes } from './types/user.types'

export const USER_SLICE_NAME = 'user'
export const TWOFA_SLICE_NAME = 'twoFa'
export const RTK_API_NAME = 'splitApi'

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
