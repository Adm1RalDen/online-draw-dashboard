import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { ErrorMessages } from 'const/enums'
import { loginThunk } from 'store/thunks/user/authorization.thunk'
import { UserReducerInitialTypes } from 'store/types/user.types'

export const loginBuilder = (builder: ActionReducerMapBuilder<UserReducerInitialTypes>) => {
  builder.addCase(loginThunk.pending, (state) => {
    state.isLoading = true
  })

  builder.addCase(loginThunk.fulfilled, (state) => {
    state.isLoading = false
  })

  builder.addCase(loginThunk.rejected, (state, { payload }) => {
    state.isLoading = false
    state.error = typeof payload === 'string' ? payload : ErrorMessages.OCCURED_ERROR
  })
}
