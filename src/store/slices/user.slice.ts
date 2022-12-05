import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
  getUserProfileBuilder,
  loginBuilder,
  saveUserDataBuilder,
  updateAuthStatusBuilder,
  updateUserProfileBuilder,
  userLogoutBuilder,
  userRegistrationBuilder
} from 'store/builders'
import {
  loginThunk,
  saveUserDataThunk,
  updateAuthStatusThunk,
  userLogoutThunk,
  userRegistrationThunk
} from 'store/thunks/user/authorization.thunk'
import { getUserProfileThunk, updateUserProfileThunk } from 'store/thunks/user/user.thunk'

import { SavedUserObject } from 'types'

import { USER_SLICE_NAME, defaultUserData, userInitialState } from '../const'

const UserSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState: userInitialState,
  reducers: {
    initializeUser: (state, { payload: { token, user } }: PayloadAction<SavedUserObject>) => {
      state.token = token
      state.data.id = user.id
      state.data.name = user.name
      state.data.role = user.role
    },

    cancelUser2faAction: (state) => {
      state.data = defaultUserData
    },

    unauthorize: (state) => {
      state.isUserStateLoaded = true
      state.data = defaultUserData
    },

    enable2Fa: (state) => {
      state.data.isUse2FA = true
    },

    disable2Fa: (state) => {
      state.data.isUse2FA = false
    }
  },

  extraReducers: (builder) => {
    loginBuilder(builder, loginThunk)
    getUserProfileBuilder(builder, getUserProfileThunk)
    saveUserDataBuilder(builder, saveUserDataThunk)
    updateUserProfileBuilder(builder, updateUserProfileThunk)
    userRegistrationBuilder(builder, userRegistrationThunk)
    updateAuthStatusBuilder(builder, updateAuthStatusThunk)
    userLogoutBuilder(builder, userLogoutThunk)
  }
})

export const { initializeUser, cancelUser2faAction, unauthorize, disable2Fa, enable2Fa } =
  UserSlice.actions

export default UserSlice.reducer
