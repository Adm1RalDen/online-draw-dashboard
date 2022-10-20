import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { TWOFA_SLICE, USER_SLICE } from './const'
import { appApi } from './rtk/api'
import { TwoFASlice } from './slices/twoFa.slice'
import { UserSlice } from './slices/user.slice'

const RootReducer = combineReducers({
  [USER_SLICE]: UserSlice.reducer,
  [TWOFA_SLICE]: TwoFASlice.reducer,
  [appApi.reducerPath]: appApi.reducer
})

export const store = configureStore({
  reducer: RootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
