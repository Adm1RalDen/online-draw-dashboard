import { Disable2FAData } from '../types'

export const disableTwoFaQueryObj = {
  query: (data: Disable2FAData) => ({
    url: '/user/disable-2fa',
    method: 'POST',
    body: data
  })
}
