// eslint-disable-next-line import/no-unresolved
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

import { API_URL } from 'api/const'

import { NetworkStatus } from 'const/enums'
import { RootState } from 'store'
import { RTK_API_NAME } from 'store/const'
import { initializeUser } from 'store/slices/user.slice'
import { userLogoutThunk } from 'store/thunks/user/authorization.thunk'

import { getRefreshToken } from 'services/token.service'

import { ServerResponseError } from 'types'
import { AuthResponse } from 'types/user'

import { ServiceName } from './types'

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token

    if (token) headers.set('authorization', `Bearer ${token}`)

    return headers
  }
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError | ServerResponseError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === NetworkStatus.UNAUTHORITHED) {
    const refreshResult = await baseQuery(
      {
        url: '/user/refresh',
        method: 'POST',
        body: { refreshToken: getRefreshToken() }
      },
      api,
      extraOptions
    )

    if (refreshResult.data) {
      api.dispatch(initializeUser({ ...(refreshResult.data as AuthResponse) }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(userLogoutThunk())
    }
  }

  return result
}

export const apiSlice = createApi({
  reducerPath: RTK_API_NAME,
  baseQuery: baseQueryWithReauth,
  tagTypes: [ServiceName.TWOFA, ServiceName.USER],
  endpoints: () => ({})
})
