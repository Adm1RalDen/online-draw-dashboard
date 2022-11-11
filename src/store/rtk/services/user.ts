import { apiSlice } from '../api'
import { recoverPasswordQueryObj } from '../queriesObjects/recoverPassword'
import { resetPasswordQueryObj } from '../queriesObjects/resetPassword'
import { RecoverPasswordData, ResetPasswordData } from '../types'

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    recoverPassword: builder.mutation<void, RecoverPasswordData>(recoverPasswordQueryObj),
    resetPassword: builder.mutation<void, ResetPasswordData>(resetPasswordQueryObj)
  })
})

export const { useResetPasswordMutation, useRecoverPasswordMutation } = userApi
