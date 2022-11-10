import { FetchArgs } from '@reduxjs/toolkit/dist/query'

import { ServiceName } from '../types'

export const createTwoFaQueryObj = {
  query: (): FetchArgs => ({
    url: '/user/create-twoFa'
  }),
  providesTags: [ServiceName.TWOFA]
}
