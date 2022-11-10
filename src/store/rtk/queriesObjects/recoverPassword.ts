import { FetchArgs } from '@reduxjs/toolkit/dist/query'

import { ServiceName } from '../types'

export const recoverPasswordQueryObj = {
  query: (data: { email: string }): FetchArgs => ({
    url: '/user/recover-password',
    method: 'POST',
    body: data
  }),
  invalidatesTags: [ServiceName.USER]
}
