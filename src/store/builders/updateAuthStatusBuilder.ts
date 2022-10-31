import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { ErrorMessages } from 'const/enums'
import { getToken } from 'services/token.service'
import { UpdateAuthStatusThunkType, UserReducerInitialTypes } from 'store/types/user.types'

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
    state.hasUserStateLoaded = true
  })

  builder.addCase(updateAuthStatusThunk.rejected, (state, { payload }) => {
    state.isLoading = false
    state.hasUserStateLoaded = true
    state.isAuth = false
    state.error = typeof payload === 'string' ? payload : ErrorMessages.OCCURED_ERROR
  })
}

export default updateAuthStatusBuilder
