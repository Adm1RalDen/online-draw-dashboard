import { FetchArgs } from '@reduxjs/toolkit/dist/query'
import { setHeaders } from 'api/const'

export const createTwoFaQueryObj = {
  query: (): FetchArgs => ({
    url: '/user/create-twoFa',
    ...setHeaders()
  })
}
