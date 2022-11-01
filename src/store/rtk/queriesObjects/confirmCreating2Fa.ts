import { FetchArgs } from '@reduxjs/toolkit/dist/query'

import { ConfirmCreating2FaData } from '../types'

export const confirmCreating2FaQueryObj: any = {
  query: (data: ConfirmCreating2FaData): FetchArgs => ({
    url: '/user/confirm-creating-2fa',
    method: 'POST',
    body: data
  }),
  invalidatesTags: ['TwoFa']
}
