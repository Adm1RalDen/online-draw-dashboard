import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { ErrorMessages } from 'const/enums'
import { UpdateUserProfileThunkType, UserReducerInitialTypes } from 'store/types/user.types'

const updateUserProfileBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>,
  updateUserProfileThunk: UpdateUserProfileThunkType
) => {
  builder.addCase(updateUserProfileThunk.pending, (state) => {
    state.isLoading = true
  })

  builder.addCase(updateUserProfileThunk.fulfilled, (state) => {
    state.isLoading = false
  })

  builder.addCase(updateUserProfileThunk.rejected, (state) => {
    state.isLoading = false
    state.error = ErrorMessages.OCCURED_ERROR
  })
}

export default updateUserProfileBuilder
