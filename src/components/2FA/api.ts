import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from 'api/const'
import { SuccessAuthResponse, VerifyRequestData } from 'types'

export const twoFactorApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    confirmUser2FA: builder.mutation<SuccessAuthResponse, VerifyRequestData>({
      query: (data) => ({
        url: '/user/verify',
        method: 'POST',
        body: data
      })
    })
  })
})

export const { useConfirmUser2FAMutation } = twoFactorApi
