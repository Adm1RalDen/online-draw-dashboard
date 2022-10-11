import { Dispatch, createAsyncThunk } from '@reduxjs/toolkit'
import { authorizeUser } from 'api/user/authorize'
import { getProfile } from 'api/user/getProfile'
import { logout } from 'api/user/logout'
import { registrationUser } from 'api/user/registration'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import {
  deleteSavedToken,
  getSavedUser,
  saveRefreshToken,
  saveUserInStorage
} from 'services/token.service'
import { USER_REDUCER } from 'store/const'
import { initializeUser, logoutAction, setUser2faAction } from 'store/slices/user.slice'
import { cryptoSha256 } from 'utils/cryptoPassord'
import { errorHandler } from 'utils/errorHandler'

import {
  SuccessAuthResponse,
  User2FALoginResponse,
  UserLoginFormData,
  UserRegistrationData
} from '../../../types'

export const updateAuthStatusThunk = createAsyncThunk(
  `${USER_REDUCER}/updateAuthStatus-thunk`,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const savedUser = getSavedUser()

      if (savedUser) {
        const profile = await getProfile(savedUser.user.id)
        dispatch(initializeUser(savedUser))
        return profile.data
      }

      throw new Error('User is not authorized')
    } catch (e) {
      await UserLogoutThunk(dispatch)
      return rejectWithValue('User is not authorized')
    }
  }
)

export const loginThunk = createAsyncThunk(
  `${USER_REDUCER}/login-thunk`,
  async (data: UserLoginFormData, { dispatch }) => {
    try {
      const password = cryptoSha256(data.password)
      const response = await authorizeUser({ ...data, password })

      if (!(response.data as User2FALoginResponse)?.isUse2FA) {
        return dispatch(saveUserDataThunk({ ...(response.data as SuccessAuthResponse) }))
      }

      dispatch(setUser2faAction(response.data as User2FALoginResponse))
    } catch (e) {
      errorHandler(e)
    }
  }
)

export const saveUserDataThunk = createAsyncThunk(
  `${USER_REDUCER}/saveUserData-thunk`,
  async (data: SuccessAuthResponse, { rejectWithValue }) => {
    try {
      saveUserInStorage({ token: data.token, user: data.user })
      saveRefreshToken(data.refreshToken)

      const profile = await getProfile(data.user.id)
      return { token: data.token, profile: profile.data }
    } catch (e) {
      errorHandler(e)
      return rejectWithValue('Login error')
    }
  }
)

export const userRegistrationThunk = createAsyncThunk(
  `${USER_REDUCER}/registration-thunk`,
  async (data: UserRegistrationData, { rejectWithValue }) => {
    try {
      const response = await registrationUser(data)
      toast.success(response.data.message)
      return response.data
    } catch (e) {
      if (e instanceof AxiosError) {
        toast.error(e.response?.data.message)
        return rejectWithValue(e.response?.data.message || 'Registration error')
      }
      return rejectWithValue('Registration error')
    }
  }
)

export const UserLogoutThunk = async (dispatch: Dispatch) => {
  await logout()
  deleteSavedToken()
  dispatch(logoutAction())
}
