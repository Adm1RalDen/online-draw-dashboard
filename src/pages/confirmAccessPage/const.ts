import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-toastify'

import { JOIN_ROOM_ERROR_SOCKET, JOIN_ROOM_SUCCESS_SOCKET } from 'const/sockets'
import { DRAW_ONLINE_URL } from 'const/urls'

import { FunctionWithParams } from 'types'
import { SocketApp } from 'types/socket'

type Props = {
  socket: SocketApp
  navigate: NavigateFunction
  setIsLoading: FunctionWithParams<boolean>
}

export const SetAccessPageConnection = (data: Props) => {
  const { navigate, setIsLoading, socket } = data

  socket.on(JOIN_ROOM_SUCCESS_SOCKET, (id) => {
    navigate(`${DRAW_ONLINE_URL}/${id}`, { state: true })
    setIsLoading(false)
  })

  socket.on(JOIN_ROOM_ERROR_SOCKET, (e) => {
    setIsLoading(false)
    toast.error(e)
  })
}

export const ClearAccessPageConnection = (socket: SocketApp) => {
  socket.off(JOIN_ROOM_SUCCESS_SOCKET)
  socket.off(JOIN_ROOM_ERROR_SOCKET)
}
