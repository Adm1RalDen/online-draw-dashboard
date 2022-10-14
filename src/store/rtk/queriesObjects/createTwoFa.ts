import { FetchArgs } from '@reduxjs/toolkit/dist/query'
import { SetHeaders } from 'api/const'

export const createTwoFaQueryObj = {
  query: (): FetchArgs => ({
    url: '/user/create-twoFa',
    ...SetHeaders()
  })
}
