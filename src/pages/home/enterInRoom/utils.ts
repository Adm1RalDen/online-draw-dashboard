import * as yup from 'yup'

import { ErrorMessages } from 'const/enums'
import { JOIN_ROOM_SOCKET } from 'const/sockets'

import { FunctionWithParams } from 'types'
import { SocketApp } from 'types/socket'

import { EnterInRoomType } from '../types'

export const validationSchema = yup.object().shape({
  roomId: yup.string().required(ErrorMessages.REQUIRED)
})

export const onSubmit = async (
  data: EnterInRoomType,
  socket: SocketApp,
  setIsLoading: FunctionWithParams<boolean>
) => {
  setIsLoading(true)
  socket.emit(JOIN_ROOM_SOCKET, data)
}
