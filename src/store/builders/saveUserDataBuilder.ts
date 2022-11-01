import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { ErrorMessages } from 'const/enums'
import { SaveUserDataThunkType, UserReducerInitialTypes } from 'store/types/user.types'

const saveUserDataBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>,
  saveUserDataThunk: SaveUserDataThunkType
) => {
  builder.addCase(saveUserDataThunk.pending, (state) => {
    state.isLoading = true
  })

  builder.addCase(saveUserDataThunk.fulfilled, (state, { payload: { token, profile } }) => {
    state.token = token
    state.data = { ...profile }
    state.error = undefined
    state.isLoading = false
    state.isAuth = true
  })

  builder.addCase(saveUserDataThunk.rejected, (state, { payload }) => {
    state.isLoading = false
    state.isAuth = false
    state.error = typeof payload === 'string' ? payload : ErrorMessages.OCCURED_ERROR
  })
}

export default saveUserDataBuilder
