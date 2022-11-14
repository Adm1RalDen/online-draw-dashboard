import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { authorizeUser } from 'api/user/authorize'
import { getProfile } from 'api/user/getProfile'
import { registrationUser } from 'api/user/registration'

import { ErrorMessages } from 'const/enums'
import { resetStore } from 'store/actions'
import { USER_SLICE_NAME } from 'store/const'
import { LoginThunkParams, RegistrationThunkParams } from 'store/types/user.types'

import {
  deleteSavedToken,
  getSavedUser,
  saveRefreshToken,
  saveUserInStorage
} from 'services/token.service'
import { cryptoSha256 } from 'utils/cryptoPassord'
import { errorHandler } from 'utils/errorHandler'

import { AuthResponse, User2FALoginResponse } from 'types'

export const updateAuthStatusThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/updateAuthStatus-thunk`,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const savedUser = getSavedUser()

      if (savedUser) {
        const profile = await getProfile(savedUser.user.id)
        return profile.data
      }

      throw new Error(ErrorMessages.UNAUTHORITHED_ERROR)
    } catch (e) {
      dispatch(userLogoutThunk())
      return rejectWithValue(ErrorMessages.UNAUTHORITHED_ERROR)
    }
  }
)

export const loginThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/login-thunk`,
  async (
    { email, password, setAttemptsLeftCount, executeRecaptcha }: LoginThunkParams,
    { dispatch }
  ) => {
    try {
      const hashPassword = cryptoSha256(password)
      const captcha = await executeRecaptcha('login')

      if (!captcha) {
        throw 'error'
      }

      const response = await authorizeUser({
        email,
        password: hashPassword,
        captcha
      })

      if (Object.hasOwn(response.data, 'isUse2FA')) {
        setAttemptsLeftCount((response.data as User2FALoginResponse).attemptsLeftCount)

        return response.data as User2FALoginResponse
      }

      dispatch(saveUserDataThunk({ ...(response.data as AuthResponse) }))
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
  async ({ password, executeRecaptcha, ...data }: RegistrationThunkParams, { rejectWithValue }) => {
    try {
      const hash_password = cryptoSha256(password)
      const captcha = await executeRecaptcha('login')

      if (!captcha) {
        throw 'error'
      }

      const response = await registrationUser({ ...data, password: hash_password, captcha })

      toast.success(response.data.message)

      return response.data
    } catch (e) {
      return rejectWithValue(errorHandler(e, ErrorMessages.REGISTRATION_ERROR))
    }
  }
)

export const userLogoutThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/logout-thunk`,
  async (_, { dispatch }) => {
    deleteSavedToken()
    dispatch(resetStore())
  }
)
