import { AppDispatch } from 'store'
import { AuthorizedUser } from 'types'

import { InitialStateTypes } from '../types'

export type UpdateUserModalTypes = {
  userData: AuthorizedUser
  handleEdit: VoidFunction
}

export type SubmitParams = {
  data: InitialStateTypes
  userData: AuthorizedUser
  cropAvatar: string
  originalAvatar: string
  backgroundFon: File | string
  biography: string
  dispatch: AppDispatch
  handleEdit: VoidFunction
}
