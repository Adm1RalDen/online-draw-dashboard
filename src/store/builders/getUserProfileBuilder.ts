import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { ErrorMessages } from 'const/enums'
import { GetUserProfileThunkType, UserReducerInitialTypes } from 'store/types/user.types'

const getUserProfileBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>,
  getUserProfileThunk: GetUserProfileThunkType
) => {
  builder.addCase(getUserProfileThunk.pending, (state) => {
    state.isLoading = true
    state.error = ''
  })

  builder.addCase(getUserProfileThunk.fulfilled, (state, { payload }) => {
    state.data = { ...payload }
    state.isLoading = false
    state.error = undefined
  })

  builder.addCase(getUserProfileThunk.rejected, (state) => {
    state.isLoading = false
    state.error = ErrorMessages.OCCURED_ERROR
  })
}

export default getUserProfileBuilder
