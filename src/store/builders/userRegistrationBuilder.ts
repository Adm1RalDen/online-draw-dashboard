import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { userRegistrationThunk } from 'store/thunks/user/authorization.thunk'
import { UserReducerInitialTypes } from 'store/types/user.types'

export const userRegistrationBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>
) => {
  builder.addCase(userRegistrationThunk.pending, (state) => {
    state.isLoading = true
  })

  builder.addCase(userRegistrationThunk.fulfilled, (state) => {
    state.isLoading = false
  })

  builder.addCase(userRegistrationThunk.rejected, (state, { payload }) => {
    state.isLoading = false
    state.error = payload as string
  })
}
