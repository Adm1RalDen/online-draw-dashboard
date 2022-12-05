import { VerifyRequestData } from 'types/user'

import { ServiceName } from '../types'

export const confirmUser2FAQueryObj = {
  query: (data: VerifyRequestData) => ({
    url: '/user/verify',
    method: 'POST',
    body: data
  }),
  invalidatesTags: [ServiceName.TWOFA]
}
