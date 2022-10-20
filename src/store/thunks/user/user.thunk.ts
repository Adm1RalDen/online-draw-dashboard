import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfile } from 'api/user/getProfile'
import { updateUser } from 'api/user/update'
import { USER_SLICE } from 'store/const'

export const getUserProfileThunk = createAsyncThunk(
  `${USER_SLICE}/profile-thunk`,
  async (id: string) => {
    const response = await getProfile(id)
    return response.data
  }
)

export const updateUserProfileThunk = createAsyncThunk(
  `${USER_SLICE}/update-profile-thunk`,
  async (data: FormData, { dispatch }) => {
    const response = await updateUser(data)
    dispatch(getUserProfileThunk(data.get('id') as string))
    return response.data
  }
)
