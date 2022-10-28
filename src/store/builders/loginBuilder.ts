import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { ErrorMessages } from 'const/enums'
import { LoginThunkType, UserReducerInitialTypes } from 'store/types/user.types'

const loginBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>,
  loginThunk: LoginThunkType
) => {
  builder.addCase(loginThunk.pending, (state) => {
    state.isLoading = true
  })

  builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
    if (payload) {
      state.data.id = payload.userId
      state.data.isUse2FA = payload.isUse2FA
    }
    state.isLoading = false
  })

  builder.addCase(loginThunk.rejected, (state, { payload }) => {
    state.isLoading = false
    state.error = typeof payload === 'string' ? payload : ErrorMessages.OCCURED_ERROR
  })
}

export default loginBuilder
