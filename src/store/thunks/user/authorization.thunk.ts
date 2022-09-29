import { Dispatch, createAsyncThunk } from '@reduxjs/toolkit'
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
import { initializeUser, logoutAction } from 'store/slices/user.slice'

import { RefreshResponse, UserRegistrationData } from '../../../types'

export const AuthorizedThunk = createAsyncThunk(
  `${USER_REDUCER}/authorize-thunk`,
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

export const UserLoginThunk = createAsyncThunk(
  `${USER_REDUCER}/login-thunk`,
  async (data: RefreshResponse, { rejectWithValue }) => {
    try {
      saveUserInStorage({ token: data.token, user: data.user })
      saveRefreshToken(data.refreshToken)
      const profile = await getProfile(data.user.id)
      return { token: data.token, profile: profile.data }
    } catch (e) {
      if (e instanceof AxiosError) {
        toast.error(e.response?.data.message)
        return rejectWithValue(e.response?.data.message || 'Login error')
      }
      return rejectWithValue('Login error')
    }
  }
)

export const UserRegistrationThunk = createAsyncThunk(
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
