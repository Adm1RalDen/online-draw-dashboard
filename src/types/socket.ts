/* eslint no-unused-vars:"off" */
import { ChatMessage, CreateRoom } from 'pages/home/types'
import { Socket } from 'socket.io-client'
import { AuthorizedUser, DrawData } from 'types'

import { ActiveRoom } from './rooms'

interface UpdateUserRoom extends Partial<Omit<AuthorizedUser, 'id' | 'role' | 'email'>> {
  userId: string
  roomId: string
}

export interface ClientToServerEvents {
  CREATE: (data: CreateRoom) => void
  EXIT: (data: { roomId: string; userId: string }) => void
  JOIN: (data: { roomId: string; roomPassword: string; userId: string; userName: string }) => void
  DRAW: (data: DrawData) => void
  FINISH_DRAW: (data: { roomId: string }) => void
  GET_ROOMS: VoidFunction
  GET_USER_ROOMS: (data: { userId: string }) => void
  GET_SNAPSHOT: (data: { roomId: string; userId: string; socketId: string }) => void
  SEND_SNAPSHOT: (data: { img: string; recipient: string }) => void
  CONNECTION_DRAW: (data: { userName: string; roomId: string }) => void
  GET_CHAT: VoidFunction
  GET_ROOM: (roomId: string) => void
  CHAT_MESSAGE: (data: { userId: string; name: string; message: string }) => void
  DELETE_USER_ROOM: (data: { userId: string; roomId: string; roomPassword: string }) => void
  UPDATE_USER_ROOM: (data: UpdateUserRoom) => void
  JOIN_ACCESS: (data: { roomId: string; userId: string }) => void
}

export interface ServerToClientEvents {
  SET_SNAPSHOT: (img: string) => void
  SEND_SNAPSHOT: (ownerId: string, recipient: string) => void
  CONNECTION_DRAW: (userName: string) => void
  FINISH_DRAW: VoidFunction
  CASE_EXIT: VoidFunction
  DRAW: (data: DrawData) => void
  GET_ROOMS: (data: ActiveRoom[]) => void
  CREATE_SUCCESS: (id: string) => void
  CREATE_ERROR: (e: string) => void
  JOIN_SUCCESS: (id: string) => void
  JOIN_ERROR: (e: string) => void
  GET_USER_ROOMS: (data: ActiveRoom[]) => void
  DELETE_USER_ROOM_ERROR: (e: string) => void
  DELETE_USER_ROOM_SUCCESS: VoidFunction
  UPDATE_USER_ROOM_SUCCESS: VoidFunction
  UPDATE_USER_ROOM_ERROR: (e: string) => void
  CHAT_ERROR: (data: string) => void
  GET_CHAT: (data: ChatMessage[]) => void
  CHAT_MESSAGE: (data: ChatMessage) => void
  GET_ROOM: (data: Omit<ActiveRoom, 'roomPassword'>) => void
}

export type SocketApp = Socket<ServerToClientEvents, ClientToServerEvents>
