import {
  loginThunk,
  saveUserDataThunk,
  updateAuthStatusThunk,
  userLogoutThunk,
  userRegistrationThunk
} from 'store/thunks/user/authorization.thunk'
import { getUserProfileThunk, updateUserProfileThunk } from 'store/thunks/user/user.thunk'
import { FunctionWithParams, UserLoginFormData } from 'types'

export type UserReducerInitialTypes = {
  isAuth: boolean
  isLoading: boolean
  error: undefined | string
  token: undefined | string
  hasUserStateLoaded: boolean
  data: {
    id: string
    avatar: string
    backgroundFon: string
    originalAvatar: string
    name: string
    role: string
    email: string
    country: string
    city: string
    color: string
    gender: string
    date: string
    biography: string
    isUse2FA: boolean
  }
}

export type LoginThunkParams = UserLoginFormData & {
  setAttemptsLeftCount: FunctionWithParams<number>
}

export type GetUserProfileThunkType = typeof getUserProfileThunk
export type LoginThunkType = typeof loginThunk
export type UpdateAuthStatusThunkType = typeof updateAuthStatusThunk
export type SaveUserDataThunkType = typeof saveUserDataThunk
export type UpdateUserProfileThunkType = typeof updateUserProfileThunk
export type UserRegistrationThunkType = typeof userRegistrationThunk
export type UserLogoutThunkType = typeof userLogoutThunk
