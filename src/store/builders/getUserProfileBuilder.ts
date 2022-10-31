import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import { ErrorMessages } from 'const/enums'
import { getUserProfileThunk } from 'store/thunks/user/user.thunk'
import { UserReducerInitialTypes } from 'store/types/user.types'
import { AuthorizedUser } from 'types'

export const getUserProfileBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>
) => {
  builder.addCase(getUserProfileThunk.pending, (state) => {
    state.isLoading = true
    state.error = ''
  })

  builder.addCase(
    getUserProfileThunk.fulfilled,
    (state, { payload }: PayloadAction<AuthorizedUser>) => {
      state.data = { ...payload }
      state.isLoading = false
      state.error = undefined
    }
  )

  builder.addCase(getUserProfileThunk.rejected, (state) => {
    state.isLoading = false
    state.error = ErrorMessages.OCCURED_ERROR
  })
}
