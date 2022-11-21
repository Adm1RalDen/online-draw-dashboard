import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProfile } from 'api/user/getProfile'
import { updateUser } from 'api/user/update'

import { ErrorMessages } from 'const/enums'
import { USER_SLICE_NAME } from 'store/const'

import { userLogoutThunk } from './authorization.thunk'

export const getUserProfileThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/profile-thunk`,
  async (id: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await getProfile(id)
      return response.data
    } catch {
      dispatch(userLogoutThunk())
      return rejectWithValue(ErrorMessages.OCCURED_ERROR)
    }
  }
)

export const updateUserProfileThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/update-profile-thunk`,
  async (data: FormData, { dispatch, rejectWithValue }) => {
    const id = data.get('id')

    if (typeof id === 'string') {
      const response = await updateUser(data)
      return response.data
    }

    dispatch(userLogoutThunk())
    return rejectWithValue(ErrorMessages.OCCURED_ERROR)
  }
)
