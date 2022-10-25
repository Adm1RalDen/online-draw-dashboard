import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfile } from 'api/user/getProfile'
import { updateUser } from 'api/user/update'
import { ErrorMessages } from 'const/enums'
import { USER_SLICE_NAME } from 'store/const'

export const getUserProfileThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/profile-thunk`,
  async (id: string) => {
    const response = await getProfile(id)
    return response.data
  }
)

export const updateUserProfileThunk = createAsyncThunk(
  `${USER_SLICE_NAME}/update-profile-thunk`,
  async (data: FormData, { dispatch, rejectWithValue }) => {
    const id = data.get('id')

    if (typeof id === 'string') {
      const response = await updateUser(data)
      dispatch(getUserProfileThunk(id))
      return response.data
    }

    return rejectWithValue(ErrorMessages.OCCURED_ERROR)
  }
)
