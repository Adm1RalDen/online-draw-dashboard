import * as yup from 'yup'

import { CREATE_ROOM_SOCKET, GET_USER_ROOMS_SOCKET } from 'const/sockets'

import { FunctionWithParams } from 'types'
import { SocketApp } from 'types/socket'

import { CreateRoom } from '../types'

const initialValues = {
  roomName: '',
  roomPassword: ''
}
const validationSchema = yup.object().shape({
  roomName: yup.string().required('Required')
})

const onSubmit = async (
  data: CreateRoom,
  setIsLoading: FunctionWithParams<boolean>,
  socket: SocketApp
) => {
  setIsLoading(true)
  socket.emit(CREATE_ROOM_SOCKET, data)
  socket.emit(GET_USER_ROOMS_SOCKET, { userId: data.userId })
}
export { initialValues, validationSchema, onSubmit }
