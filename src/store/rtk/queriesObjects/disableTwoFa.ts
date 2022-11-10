import { Disable2FAData, ServiceName } from '../types'

export const disableTwoFaQueryObj = {
  query: (data: Disable2FAData) => ({
    url: '/user/disable-2fa',
    method: 'POST',
    body: data
  }),
  invalidatesTags: [ServiceName.TWOFA]
}
