import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { ErrorMessages } from 'const/enums'
import { UpdateUserProfileThunkType, UserReducerInitialTypes } from 'store/types/user.types'

const updateUserProfileBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>,
  updateUserProfileThunk: UpdateUserProfileThunkType
) => {
  builder.addCase(updateUserProfileThunk.pending, (state) => {
    state.isLoading = true
    state.error = ''
  })

  builder.addCase(updateUserProfileThunk.fulfilled, (state, { payload }) => {
    state.data = { ...state.data, ...payload }
    state.isLoading = false
    state.error = undefined
  })

  builder.addCase(updateUserProfileThunk.rejected, (state) => {
    state.isLoading = false
    state.error = ErrorMessages.OCCURED_ERROR
  })
}

export default updateUserProfileBuilder
