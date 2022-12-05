import { toast } from 'react-toastify'

import { JOIN_ROOM_ERROR_SOCKET, JOIN_ROOM_SUCCESS_SOCKET } from 'const/sockets'
import { DRAW_ONLINE_URL } from 'const/urls'

import { SocketApp } from 'types/socket'

import { SetAccessPageConnectionParams } from './types'

export const setAccessPageConnection = (data: SetAccessPageConnectionParams) => {
  const { socket, navigate, setIsLoading } = data

  socket.on(JOIN_ROOM_SUCCESS_SOCKET, (id) => {
    navigate(`${DRAW_ONLINE_URL}/${id}`, { state: true })
    setIsLoading(false)
  })

  socket.on(JOIN_ROOM_ERROR_SOCKET, (e) => {
    setIsLoading(false)
    toast.error(e)
  })
}

export const clearAccessPageConnection = (socket: SocketApp) => {
  socket.off(JOIN_ROOM_SUCCESS_SOCKET)
  socket.off(JOIN_ROOM_ERROR_SOCKET)
}
