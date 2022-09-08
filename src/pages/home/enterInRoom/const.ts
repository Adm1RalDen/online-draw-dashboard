import { JOIN_ROOM_SOCKET } from 'const/sockets'
import { FunctionWithParams } from 'types'
import { SocketApp } from 'types/socket'
import * as yup from 'yup'

import { EnterInRoomType } from '../types'

const initialValues = {
  roomId: '',
  roomPassword: ''
}
const validationSchema = yup.object().shape({
  roomId: yup.string().required('Required')
})

const onSubmit = async (
  data: EnterInRoomType,
  socket: SocketApp,
  setIsLoading: FunctionWithParams<boolean>
) => {
  setIsLoading(true)
  socket.emit(JOIN_ROOM_SOCKET, data)
}

export { initialValues, onSubmit, validationSchema }
