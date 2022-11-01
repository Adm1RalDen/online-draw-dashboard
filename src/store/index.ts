import { Action, combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { resetStore } from './actions'
import { RTK_API_NAME, TWOFA_SLICE_NAME, USER_SLICE_NAME } from './const'
import { apiSlice } from './rtk/api'
import TwoFaSlice from './slices/twoFa.slice'
import UserSlice from './slices/user.slice'

const combinedReducer = combineReducers({
  [RTK_API_NAME]: apiSlice.reducer,
  [USER_SLICE_NAME]: UserSlice,
  [TWOFA_SLICE_NAME]: TwoFaSlice
})

const rootReducer = (state: RootState | undefined, action: Action) => {
  if (action.type === resetStore.toString()) {
    state = undefined
  }

  return combinedReducer(state, action)
}

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof combinedReducer>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
