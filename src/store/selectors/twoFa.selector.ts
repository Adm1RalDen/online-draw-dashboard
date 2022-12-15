import { RootState } from 'store'

export const twoFaSelector = (state: RootState) => state.twoFa
export const twoFaHasLetterSentSelector = (state: RootState) => state.twoFa.hasLetterSent
