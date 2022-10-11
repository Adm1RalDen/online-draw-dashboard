import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import { getSavedUser } from 'services/token.service'
import { updateAuthStatusThunk } from 'store/thunks/user/authorization.thunk'
import { UserReducerInitialTypes } from 'store/types/user.types'
import { AuthorizedUser, SavedUserObject } from 'types'

export const updateAuthStatusBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>
) => {
  builder.addCase(updateAuthStatusThunk.pending, (state) => {
    state.isLoading = true
  })

  builder.addCase(
    updateAuthStatusThunk.fulfilled,
    (state, { payload }: PayloadAction<AuthorizedUser>) => {
      const user = getSavedUser() as SavedUserObject
      state.token = user.token
      state.data = { ...payload }
      state.isLoading = false
      state.error = undefined
      state.isAuth = true
      state.hasUserStateLoaded = true
    }
  )

  builder.addCase(updateAuthStatusThunk.rejected, (state, { payload }) => {
    state.isLoading = false
    state.hasUserStateLoaded = true
    state.isAuth = false
    state.error = payload as string
  })
}
