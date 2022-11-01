import { FetchArgs } from '@reduxjs/toolkit/dist/query'

export const sendCodeOnEmailQueryObj: any = {
  query: (): FetchArgs => ({
    url: '/user/send-code-on-mail'
  }),
  providesTags: ['TwoFa']
}
