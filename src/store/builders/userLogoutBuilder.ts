import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { UserLogoutThunkType, UserReducerInitialTypes } from 'store/types/user.types'

const userLogoutBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>,
  userLogoutThunk: UserLogoutThunkType
) => {
  builder.addCase(userLogoutThunk.fulfilled, (state) => {
    state.hasUserStateLoaded = true
  })
}

export default userLogoutBuilder
