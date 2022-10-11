import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { twoFactorApi } from 'components/2FA/api'

import { USER_REDUCER } from './const'
import { UserSlice } from './slices/user.slice'

const RootReducer = combineReducers({
  [USER_REDUCER]: UserSlice.reducer,
  [twoFactorApi.reducerPath]: twoFactorApi.reducer
})

export const store = configureStore({
  reducer: RootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(twoFactorApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
