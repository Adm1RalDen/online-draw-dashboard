import { Socket } from 'socket.io-client'

import { ChatMessageType, CreateRoom } from 'pages/home/types'

import { FunctionWithParams } from 'types'
import { AuthorizedUser } from 'types/user'

import { SocketDrawRequest, SocketDrawResponse } from './canvas'
import { ActiveRoom } from './rooms'

interface UpdateUserRoom extends Partial<Omit<AuthorizedUser, 'id' | 'email'>> {
  userId: string
  roomId: string
}

interface RequestData {
  userId: string
  roomId: string
  roomPassword: string
  userName: string
  img: string
  recipient: string
  message: string
  name: string
  socketId: string
}

export interface ClientToServerEvents {
  CREATE: FunctionWithParams<CreateRoom>
  EXIT: FunctionWithParams<Pick<RequestData, 'roomId' | 'userId'>>
  JOIN: FunctionWithParams<Pick<RequestData, 'roomId' | 'roomPassword' | 'userId' | 'userName'>>
  DRAW: FunctionWithParams<SocketDrawRequest>
  FINISH_DRAW: FunctionWithParams<Pick<RequestData, 'roomId'>>
  GET_ROOMS: VoidFunction
  GET_USER_ROOMS: FunctionWithParams<Pick<RequestData, 'userId'>>
  GET_SNAPSHOT: FunctionWithParams<Pick<RequestData, 'roomId' | 'userId' | 'socketId'>>
  SEND_SNAPSHOT: FunctionWithParams<Pick<RequestData, 'img' | 'recipient'>>
  CONNECTION_DRAW: FunctionWithParams<Pick<RequestData, 'userName' | 'roomId' | 'userId'>>
  GET_CHAT: VoidFunction
  GET_ROOM: FunctionWithParams<string>
  CHAT_MESSAGE: FunctionWithParams<Pick<RequestData, 'userId' | 'name' | 'message'>>
  DELETE_USER_ROOM: FunctionWithParams<Pick<RequestData, 'userId' | 'roomId' | 'roomPassword'>>
  UPDATE_USER_ROOM: FunctionWithParams<UpdateUserRoom>
  JOIN_ACCESS: FunctionWithParams<Pick<RequestData, 'roomId' | 'userId'>>
  GET_UPDATED_CHAT: VoidFunction
}

export interface ServerToClientEvents {
  SET_SNAPSHOT: FunctionWithParams<string>
  SEND_SNAPSHOT: (ownerId: string, recipient: string) => void
  CONNECTION_DRAW: FunctionWithParams<string>
  FINISH_DRAW: VoidFunction
  CASE_EXIT: VoidFunction
  DRAW: FunctionWithParams<SocketDrawResponse>
  GET_ROOMS: FunctionWithParams<ActiveRoom[]>
  CREATE_SUCCESS: FunctionWithParams<string>
  CREATE_ERROR: FunctionWithParams<string>
  JOIN_SUCCESS: FunctionWithParams<string>
  JOIN_ERROR: FunctionWithParams<string>
  GET_USER_ROOMS: FunctionWithParams<ActiveRoom[]>
  DELETE_USER_ROOM_ERROR: FunctionWithParams<string>
  DELETE_USER_ROOM_SUCCESS: VoidFunction
  UPDATE_USER_ROOM_SUCCESS: VoidFunction
  UPDATE_USER_ROOM_ERROR: FunctionWithParams<string>
  CHAT_ERROR: FunctionWithParams<string>
  GET_CHAT: FunctionWithParams<ChatMessageType[]>
  CHAT_MESSAGE: FunctionWithParams<ChatMessageType>
  GET_ROOM: FunctionWithParams<Omit<ActiveRoom, 'roomPassword'>>
}

export type SocketApp = Socket<ServerToClientEvents, ClientToServerEvents>
