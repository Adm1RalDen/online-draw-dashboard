import { AppDispatch } from 'store'

import { AuthorizedUser } from 'types'

export interface SubmitParams {
  data: InitialStateTypes
  userData: AuthorizedUser
  cropedAvatar: string
  originalAvatar: string
  dispatch: AppDispatch
}

export interface InitialStateTypes {
  name: string
  country: string
  city: string
  color: string
  gender: string
  date: string
  biography: string
}

export type ChangedDataKeys = Omit<AuthorizedUser, 'role' | 'email' | 'isUse2FA' | 'backgroundFon'>
