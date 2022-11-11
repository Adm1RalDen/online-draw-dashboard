import { FetchArgs } from '@reduxjs/toolkit/dist/query'

import { ServiceName } from '../types'

export const resetPasswordQueryObj = {
  query: (data: { password: string; confirmPassword: string }): FetchArgs => ({
    url: '/user/reset-password',
    method: 'POST',
    body: data
  }),
  invalidatesTags: [ServiceName.USER]
}
