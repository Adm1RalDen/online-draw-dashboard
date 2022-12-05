import { NavigateFunction } from 'react-router-dom'

import { FunctionWithParams } from 'types'
import { SocketApp } from 'types/socket'

export interface CheckUserInRoomParams {
  setIsLoading: FunctionWithParams<boolean>
  setAccess: FunctionWithParams<boolean>
  navigate: NavigateFunction
  roomId: string
  userId: string
  socket: SocketApp
}
