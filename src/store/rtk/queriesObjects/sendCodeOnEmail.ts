import { FetchArgs } from '@reduxjs/toolkit/dist/query'

export const sendCodeOnEmailQueryObj = {
  query: (): FetchArgs => ({
    url: '/user/send-code-on-mail'
  })
}
