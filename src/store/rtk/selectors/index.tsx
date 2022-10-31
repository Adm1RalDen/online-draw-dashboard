import { RootState } from 'store'

import { appApi } from '../api'

export const twoFaSelector = (state: RootState) => appApi.endpoints.createTwoFA.select()(state)
