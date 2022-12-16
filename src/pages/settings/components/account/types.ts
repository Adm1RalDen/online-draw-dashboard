import { AppDispatch } from 'store'

import { SocketApp } from 'types/socket'
import { AuthorizedUser } from 'types/user'

export interface SubmitParams {
  updatedUserData: InitialStateTypes
  userData: AuthorizedUser
  cropedAvatar: string
  originalAvatar: string
  socket: SocketApp
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
