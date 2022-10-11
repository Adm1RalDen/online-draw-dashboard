import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
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
    state.error = payload as string
  })
}
