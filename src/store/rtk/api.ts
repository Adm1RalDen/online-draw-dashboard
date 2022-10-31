import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_URL } from 'api/const'

import { AuthResponse, VerifyRequestData } from 'types'

import { confirmUser2FAQueryObj } from './queriesObjects/confirmUser2Fa'
import { createTwoFaQueryObj } from './queriesObjects/createTwoFa'

type Response = {
  code: string
  qrcode: string
}

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    createTwoFA: builder.query<Response, void>(createTwoFaQueryObj),
    confirmUser2FA: builder.mutation<AuthResponse, VerifyRequestData>(confirmUser2FAQueryObj)
  })
})

export const { useCreateTwoFAQuery, useConfirmUser2FAMutation } = appApi
