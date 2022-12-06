import { NavigateFunction } from 'react-router-dom'

import { SocketApp } from 'types/socket'

export interface CheckUserInRoomParams {
  navigate: NavigateFunction
  roomId: string
  userId: string
  socket: SocketApp
}
