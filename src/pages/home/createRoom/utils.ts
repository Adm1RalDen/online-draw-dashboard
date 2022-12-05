import * as yup from 'yup'

import { ErrorMessages } from 'const/enums'
import { CREATE_ROOM_SOCKET, GET_USER_ROOMS_SOCKET } from 'const/sockets'

import { ChangeStateAction } from 'types'
import { SocketApp } from 'types/socket'

import { CreateRoom } from '../types'

export const validationSchema = yup.object().shape({
  roomName: yup.string().required(ErrorMessages.REQUIRED)
})

export const onSubmit = async (
  data: CreateRoom,
  socket: SocketApp,
  setIsLoading: ChangeStateAction<boolean>
) => {
  setIsLoading(true)
  socket.emit(CREATE_ROOM_SOCKET, data)
  socket.emit(GET_USER_ROOMS_SOCKET, { userId: data.userId })
}
