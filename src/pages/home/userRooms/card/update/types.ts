import { FunctionWithParams } from 'types'
import { ActiveRoom } from 'types/rooms'
import { SocketApp } from 'types/socket'

interface Data {
  roomName: string
  isShow: boolean
  roomPassword: string
}

export interface HandleUpdateParams {
  data: Data
  socket: SocketApp
  setIsLoading: FunctionWithParams<boolean>
  room: ActiveRoom
  userId: string
  setEditMode: FunctionWithParams<boolean>
}
