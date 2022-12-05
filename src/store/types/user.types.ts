import {
  loginThunk,
  saveUserDataThunk,
  updateAuthStatusThunk,
  userLogoutThunk,
  userRegistrationThunk
} from 'store/thunks/user/authorization.thunk'
import { getUserProfileThunk, updateUserProfileThunk } from 'store/thunks/user/user.thunk'

export interface UserReducerInitialTypes {
  isAuth: boolean
  isLoading: boolean
  error: undefined | string
  token: undefined | string
  isUserStateLoaded: boolean
  data: {
    id: string
    avatar: string
    backgroundFon: string
    originalAvatar: string
    name: string
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

export type GetUserProfileThunkType = typeof getUserProfileThunk
export type LoginThunkType = typeof loginThunk
export type UpdateAuthStatusThunkType = typeof updateAuthStatusThunk
export type SaveUserDataThunkType = typeof saveUserDataThunk
export type UpdateUserProfileThunkType = typeof updateUserProfileThunk
export type UserRegistrationThunkType = typeof userRegistrationThunk
export type UserLogoutThunkType = typeof userLogoutThunk
