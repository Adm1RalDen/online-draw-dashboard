import { Disable2FAData } from '../types'

export const disableTwoFaQueryObj: any = {
  query: (data: Disable2FAData) => ({
    url: '/user/disable-2fa',
    method: 'POST',
    body: data
  }),
  invalidatesTags: ['TwoFa']
}
