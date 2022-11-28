import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { ErrorMessages } from 'const/enums'
import { UpdateAuthStatusThunkType, UserReducerInitialTypes } from 'store/types/user.types'

import { getToken } from 'services/token.service'

const updateAuthStatusBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>,
  updateAuthStatusThunk: UpdateAuthStatusThunkType
) => {
  builder.addCase(updateAuthStatusThunk.pending, (state) => {
    state.isLoading = true
  })

  builder.addCase(updateAuthStatusThunk.fulfilled, (state, { payload }) => {
    const token = getToken() || ''

    state.token = token
    state.data = payload
    state.isLoading = false
    state.error = undefined
    state.isAuth = true
    state.isUserStateLoaded = true
  })

  builder.addCase(updateAuthStatusThunk.rejected, (state, { payload }) => {
    state.isLoading = false
    state.isUserStateLoaded = true
    state.isAuth = false
    state.error = typeof payload === 'string' ? payload : ErrorMessages.OCCURED_ERROR
  })
}

export default updateAuthStatusBuilder
