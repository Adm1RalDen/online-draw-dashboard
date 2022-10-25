import { FetchArgs } from '@reduxjs/toolkit/dist/query'

export const createTwoFaQueryObj = {
  query: (): FetchArgs => ({
    url: '/user/create-twoFa'
  })
}
