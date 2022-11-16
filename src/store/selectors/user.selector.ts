import { RootState } from 'store'

export const userInfoSelector = (state: RootState) => state.user
export const userDataSelector = (state: RootState) => state.user.data
export const userIsUse2FaSelector = (state: RootState) => state.user.data.isUse2FA
