import { FetchArgs } from '@reduxjs/toolkit/dist/query'

export const createTwoFaQueryObj: any = {
  query: (): FetchArgs => ({
    url: '/user/create-twoFa'
  }),
  providesTags: ['TwoFa']
}
