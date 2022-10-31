import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import { ErrorMessages } from 'const/enums'
import { saveUserDataThunk } from 'store/thunks/user/authorization.thunk'
import { UserReducerInitialTypes } from 'store/types/user.types'
import { AuthorizedUser } from 'types'

type UserPayload = {
  token: string
  profile: AuthorizedUser
}

export const saveUserDataBuilder = (builder: ActionReducerMapBuilder<UserReducerInitialTypes>) => {
  builder.addCase(saveUserDataThunk.pending, (state) => {
    state.isLoading = true
  })

  builder.addCase(
    saveUserDataThunk.fulfilled,
    (state, { payload: { token, profile } }: PayloadAction<UserPayload>) => {
      state.token = token
      state.data = { ...profile }
      state.error = undefined
      state.isLoading = false
      state.isAuth = true
    }
  )

  builder.addCase(saveUserDataThunk.rejected, (state, { payload }) => {
    state.isLoading = false
    state.isAuth = false
    state.error = typeof payload === 'string' ? payload : ErrorMessages.OCCURED_ERROR
  })
}
