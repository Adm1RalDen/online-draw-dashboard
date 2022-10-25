import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from 'api/const'
import { getToken } from 'services/token.service'
import { AuthResponse, VerifyRequestData } from 'types'

import { confirmCreating2FaQueryObj } from './queriesObjects/confirmCreating2Fa'
import { confirmUser2FAQueryObj } from './queriesObjects/confirmUser2Fa'
import { createTwoFaQueryObj } from './queriesObjects/createTwoFa'
import { disableTwoFaQueryObj } from './queriesObjects/disableTwoFa'
import { sendCodeOnEmailQueryObj } from './queriesObjects/sendCodeOnEmail'
import { ConfirmCreating2FaData, Create2FARequestData, Disable2FAData } from './types'

export const appApi = createApi({
  reducerPath: 'appApi',

  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders(headers) {
      headers.set('authorization', `Bearer ${getToken()}`)
      return headers
    }
  }),

  endpoints: (builder) => ({
    createTwoFA: builder.query<Create2FARequestData, void>(createTwoFaQueryObj),
    confirmUser2FA: builder.mutation<AuthResponse, VerifyRequestData>(confirmUser2FAQueryObj),
    confirmCreating2Fa: builder.mutation<void, ConfirmCreating2FaData>(confirmCreating2FaQueryObj),
    sendCodeOnEmail: builder.query<void, void>(sendCodeOnEmailQueryObj),
    disableTwoFA: builder.mutation<void, Disable2FAData>(disableTwoFaQueryObj)
  })
})

export const {
  useCreateTwoFAQuery,
  useConfirmUser2FAMutation,
  useConfirmCreating2FaMutation,
  useSendCodeOnEmailQuery,
  useDisableTwoFAMutation
} = appApi
