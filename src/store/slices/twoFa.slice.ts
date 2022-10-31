import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ErrorMessages } from 'const/enums'
import { TWOFA_SLICE_NAME } from 'store/const'
import { twoFaApi } from 'store/rtk/services/twoFa'

const TwoFaSlice = createSlice({
  name: TWOFA_SLICE_NAME,
  initialState: {
    qrcode: '',
    secretKey: '',
    error: '',
    attemptsLeftCount: 3
  },
  reducers: {
    setAttemptsLeftCountAction: (state, { payload }: PayloadAction<number>) => {
      state.attemptsLeftCount = payload
    },
    decreseAttemptsLeftCountAction: (state) => {
      state.attemptsLeftCount -= 1
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(twoFaApi.endpoints.createTwoFA.matchFulfilled, (state, { payload }) => {
      state.qrcode = payload.qrcode
      state.secretKey = payload.secretKey
    }),
      builder.addMatcher(twoFaApi.endpoints.createTwoFA.matchRejected, (state) => {
        state.error = ErrorMessages.OCCURED_ERROR
        state.qrcode = ''
        state.secretKey = ''
      })
  }
})

export const { setAttemptsLeftCountAction, decreseAttemptsLeftCountAction } = TwoFaSlice.actions
export default TwoFaSlice.reducer
