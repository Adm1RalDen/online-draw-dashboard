import { AppDispatch } from 'store'

import { AuthorizedUser } from 'types/user'

export interface SubmitParams {
  updatedUserData: InitialStateTypes
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
