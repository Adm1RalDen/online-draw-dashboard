import { FetchArgs } from '@reduxjs/toolkit/dist/query'
import { setHeaders } from 'api/const'

export const sendCodeOnEmailQueryObj = {
  query: (): FetchArgs => ({
    url: '/user/send-code-on-mail',
    ...setHeaders()
  })
}
