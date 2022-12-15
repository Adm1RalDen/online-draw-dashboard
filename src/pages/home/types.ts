import { NavigateFunction } from 'react-router-dom'

import { ChangeStateAction, FunctionWithParams } from 'types'
import { ActiveRoom } from 'types/rooms'
import { SocketApp } from 'types/socket'

export interface CreateRoom {
  userId: string
  userName: string
  roomName: string
  roomPassword: string
}

export interface EnterInRoomType {
  userId: string
  userName: string
  roomId: string
  roomPassword: string
}

export interface ChatMessageType {
  _id: string
  userId: string
  avatar: string
  name: string
  message: string
}

export interface ChatError {
  error: string
}

export interface ChatType {
  method: 'GET_CHAT' | 'MESSAGE' | 'ERROR'
  data: ChatMessageType[] | ChatMessageType | ChatError
}

export interface SetRoomsConnectionParams {
  setActiveRooms: FunctionWithParams<ActiveRoom[]>
  setUserRooms: FunctionWithParams<ActiveRoom[]>
  navigate: NavigateFunction
  setIsLoading: ChangeStateAction<boolean>
  socket: SocketApp
  userId: string
}
