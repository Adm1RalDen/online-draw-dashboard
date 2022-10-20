import { createSlice } from '@reduxjs/toolkit'
import { ErrorMessages } from 'const/enums'
import { appApi } from 'store/rtk/api'

export const TwoFASlice = createSlice({
  name: 'twoFa',
  initialState: {
    qrcode: '',
    secretKey: '',
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(appApi.endpoints.createTwoFA.matchFulfilled, (state, { payload }) => {
      state.qrcode = payload.qrcode
      state.secretKey = payload.secretKey
    }),
      builder.addMatcher(appApi.endpoints.createTwoFA.matchRejected, (state) => {
        state.error = ErrorMessages.OCCURED_ERROR
        state.qrcode = ''
        state.secretKey = ''
      })
  }
})
