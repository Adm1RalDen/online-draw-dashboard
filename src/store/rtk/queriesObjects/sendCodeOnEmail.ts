import { FetchArgs } from '@reduxjs/toolkit/dist/query'

import { ServiceName } from '../types'

export const sendCodeOnEmailQueryObj = {
  query: (): FetchArgs => ({
    url: '/user/send-code-on-mail'
  }),
  providesTags: [ServiceName.TWOFA]
}
