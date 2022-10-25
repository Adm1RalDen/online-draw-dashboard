import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getUserProfileBuilder } from 'store/builders/getUserProfileBuilder'
import { loginBuilder } from 'store/builders/loginBuilder'
import { saveUserDataBuilder } from 'store/builders/saveUserDataBuilder'
import { updateAuthStatusBuilder } from 'store/builders/updateAuthStatusBuilder'
import { updateUserProfileBuilder } from 'store/builders/updateUserProfileBuilder'
import { userRegistrationBuilder } from 'store/builders/userRegistrationBuilder'
import { SavedUserObject, User2FALoginResponse } from 'types'

import { USER_SLICE_NAME, defaultUserData, userInitialState } from '../const'

export const UserSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState: userInitialState,
  reducers: {
    initializeUser: (state, { payload: { token, user } }: PayloadAction<SavedUserObject>) => {
      state.token = token
      state.data.id = user.id
      state.data.name = user.name
      state.data.role = user.role
    },

    logoutAction: (state) => {
      state.data = defaultUserData
      state.isAuth = false
      state.error = undefined
      state.token = undefined
    },

    setUser2faAction: (state, { payload }: PayloadAction<User2FALoginResponse>) => {
      const { userId, isUse2FA } = payload
      state.data = { ...state.data, isUse2FA, id: userId }
    },

    cancelUser2faAction: (state) => {
      state.data = defaultUserData
    }
  },

  extraReducers: (builder) => {
    loginBuilder(builder)
    getUserProfileBuilder(builder)
    saveUserDataBuilder(builder)
    updateUserProfileBuilder(builder)
    userRegistrationBuilder(builder)
    updateAuthStatusBuilder(builder)
  }
})

export const { initializeUser, logoutAction, setUser2faAction, cancelUser2faAction } =
  UserSlice.actions
