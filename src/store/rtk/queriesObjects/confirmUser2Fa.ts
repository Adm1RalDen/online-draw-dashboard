import { VerifyRequestData } from 'types'

export const confirmUser2FAQueryObj: any = {
  query: (data: VerifyRequestData) => ({
    url: '/user/verify',
    method: 'POST',
    body: data
  }),
  invalidatesTags: ['TwoFa']
}
