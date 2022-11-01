import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { ErrorMessages } from 'const/enums'
import { UserReducerInitialTypes, UserRegistrationThunkType } from 'store/types/user.types'

const userRegistrationBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>,
  userRegistrationThunk: UserRegistrationThunkType
) => {
  builder.addCase(userRegistrationThunk.pending, (state) => {
    state.isLoading = true
  })

  builder.addCase(userRegistrationThunk.fulfilled, (state) => {
    state.isLoading = false
  })

  builder.addCase(userRegistrationThunk.rejected, (state, { payload }) => {
    state.isLoading = false
    state.error = typeof payload === 'string' ? payload : ErrorMessages.OCCURED_ERROR
  })
}

export default userRegistrationBuilder
