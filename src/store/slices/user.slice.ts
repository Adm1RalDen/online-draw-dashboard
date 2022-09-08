import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { authorizedBuilder } from 'store/builders/authorizedBuilder'
import { getUserProfileBuilder } from 'store/builders/getUserProfileBuilder'
import { updateUserProfileBuilder } from 'store/builders/updateUserProfileBuilder'
import { userLoginBuilder } from 'store/builders/userLoginBuilder'
import { userRegistrationBuilder } from 'store/builders/userRegistrationBuilder'
import { SavedUserObject } from 'types'

import { USER_REDUCER, defaultUserData, userInitialState } from '../const'

export const UserSlice = createSlice({
  name: USER_REDUCER,
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
    }
  },

  extraReducers: (builder) => {
    getUserProfileBuilder(builder)
    userLoginBuilder(builder)
    updateUserProfileBuilder(builder)
    userRegistrationBuilder(builder)
    authorizedBuilder(builder)
  }
})

export const { initializeUser, logoutAction } = UserSlice.actions
