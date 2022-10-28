import { createAsyncThunk } from '@reduxjs/toolkit'
import { authorizeUser } from 'api/user/authorize'
import { getProfile } from 'api/user/getProfile'
import { registrationUser } from 'api/user/registration'
import { ErrorMessages } from 'const/enums'
import { toast } from 'react-toastify'
import {
  deleteSavedToken,
  getSavedUser,
  saveRefreshToken,
  saveUserInStorage
} from 'services/token.service'
import { resetStore } from 'store/actions'
import { USER_SLICE_NAME } from 'store/const'
import { LoginThunkParams } from 'store/types/user.types'
import { AuthResponse, User2FALoginResponse, UserRegistrationData } from 'types'
import { cryptoSha256 } from 'utils/cryptoPassord'
import { errorHandler } from 'utils/errorHandler'

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
  async ({ setAttemptsLeftCount, ...data }: LoginThunkParams, { dispatch }) => {
    try {
      const password = cryptoSha256(data.password)
      const response = await authorizeUser({ email: data.email, password })

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

export const userLogoutThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/logout-thunk`,
  async (_, { dispatch }) => {
    deleteSavedToken()
    dispatch(resetStore())
  }
)
