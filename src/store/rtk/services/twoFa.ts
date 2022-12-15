import { AuthResponse, VerifyRequestData } from 'types/user'

import { apiSlice } from '../api'
import { confirmCreating2FaQueryObj } from '../queriesObjects/confirmCreating2Fa'
import { confirmUser2FAQueryObj } from '../queriesObjects/confirmUser2Fa'
import { createTwoFaQueryObj } from '../queriesObjects/createTwoFa'
import { disableTwoFaQueryObj } from '../queriesObjects/disableTwoFa'
import { sendCodeOnEmailQueryObj } from '../queriesObjects/sendCodeOnEmail'
import { ConfirmCreating2FaData, Create2FARequestData, Disable2FAData } from '../types'

export const twoFaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTwoFA: builder.query<Create2FARequestData, void>(createTwoFaQueryObj),
    confirmUser2FA: builder.mutation<AuthResponse, VerifyRequestData>(confirmUser2FAQueryObj),
    confirmCreating2Fa: builder.mutation<void, ConfirmCreating2FaData>(confirmCreating2FaQueryObj),
    sendCodeOnEmail: builder.mutation<void, void>(sendCodeOnEmailQueryObj),
    disableTwoFA: builder.mutation<void, Disable2FAData>(disableTwoFaQueryObj)
  })
})

export const {
  useCreateTwoFAQuery,
  useConfirmCreating2FaMutation,
  useConfirmUser2FAMutation,
  useSendCodeOnEmailMutation,
  useDisableTwoFAMutation
} = twoFaApi
