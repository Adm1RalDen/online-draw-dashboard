import { FetchArgs } from '@reduxjs/toolkit/dist/query'

import { ConfirmCreating2FaData, ServiceName } from '../types'

export const confirmCreating2FaQueryObj = {
  query: (data: ConfirmCreating2FaData): FetchArgs => ({
    url: '/user/confirm-creating-2fa',
    method: 'POST',
    body: data
  }),
  invalidatesTags: [ServiceName.TWOFA]
}
