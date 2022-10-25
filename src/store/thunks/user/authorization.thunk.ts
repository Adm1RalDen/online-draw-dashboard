import { Dispatch, createAsyncThunk } from '@reduxjs/toolkit'
import { authorizeUser } from 'api/user/authorize'
import { getProfile } from 'api/user/getProfile'
import { logout } from 'api/user/logout'
import { registrationUser } from 'api/user/registration'
import { ErrorMessages } from 'const/enums'
import { toast } from 'react-toastify'
import {
  deleteSavedToken,
  getSavedUser,
  saveRefreshToken,
  saveUserInStorage
} from 'services/token.service'
import { USER_SLICE_NAME } from 'store/const'
import { initializeUser, logoutAction, setUser2faAction } from 'store/slices/user.slice'
import { cryptoSha256 } from 'utils/cryptoPassord'
import { errorHandler } from 'utils/errorHandler'

import {
  AuthResponse,
  User2FALoginResponse,
  UserLoginFormData,
  UserRegistrationData
} from '../../../types'

export const updateAuthStatusThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/updateAuthStatus-thunk`,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const savedUser = getSavedUser()

      if (savedUser) {
        const profile = await getProfile(savedUser.user.id)
        dispatch(initializeUser(savedUser))
        return profile.data
      }

      throw new Error(ErrorMessages.UNAUTHORITHED_ERROR)
    } catch (e) {
      await UserLogoutThunk(dispatch)
      return rejectWithValue(ErrorMessages.UNAUTHORITHED_ERROR)
    }
  }
)

export const loginThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/login-thunk`,
  async (data: UserLoginFormData, { dispatch }) => {
    try {
      const password = cryptoSha256(data.password)
      const response = await authorizeUser({ ...data, password })

      if (!Object.hasOwn(response.data, 'isUse2FA')) {
        return dispatch(saveUserDataThunk({ ...(response.data as AuthResponse) }))
      }

      dispatch(setUser2faAction(response.data as User2FALoginResponse))
    } catch (e) {
      errorHandler(e)
    }
  }
)

export const saveUserDataThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/saveUserData-thunk`,
  async (data: AuthResponse, { rejectWithValue }) => {
    try {
      saveUserInStorage({ token: data.token, user: data.user })
      saveRefreshToken(data.refreshToken)

      const profile = await getProfile(data.user.id)
      return { token: data.token, profile: profile.data }
    } catch (e) {
      errorHandler(e)
      return rejectWithValue(ErrorMessages.OCCURED_ERROR)
    }
  }
)

export const userRegistrationThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/registration-thunk`,
  async (data: UserRegistrationData, { rejectWithValue }) => {
    try {
      const response = await registrationUser(data)
      toast.success(response.data.message)
      return response.data
    } catch (e) {
      return rejectWithValue(errorHandler(e, ErrorMessages.REGISTRATION_ERROR))
    }
  }
)

export const UserLogoutThunk = async (dispatch: Dispatch) => {
  await logout()
  deleteSavedToken()
  dispatch(logoutAction())
}
