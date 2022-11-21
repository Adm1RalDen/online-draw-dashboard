import { RootState } from 'store'

export const userInfoSelector = (state: RootState) => state.user
export const userDataSelector = (state: RootState) => state.user.data
export const userIsUse2FaSelector = (state: RootState) => state.user.data.isUse2FA
export const userHasUserStateLoadedSelector = (state: RootState) => state.user.hasUserStateLoaded
export const userIsLoadingSelector = (state: RootState) => state.user.isLoading
export const userIdSelector = (state: RootState) => state.user.data.id
