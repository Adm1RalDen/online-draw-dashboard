import { toast } from 'react-toastify'

import {
  CREATE_ERROR_SOCKET,
  CREATE_SUCCESS_SOCKET,
  DELETE_USER_ROOM_ERROR_SOCKET,
  DELETE_USER_ROOM_SUCCESS_SOCKET,
  GET_ROOMS_SOCKET,
  GET_USER_ROOMS_SOCKET,
  JOIN_ROOM_ERROR_SOCKET,
  JOIN_ROOM_SUCCESS_SOCKET,
  UPDATE_USER_ROOM_ERROR_SOCKET,
  UPDATE_USER_ROOM_SUCCESS_SOCKET
} from 'const/sockets'
import { DRAW_ONLINE_URL } from 'const/urls'

import { SocketApp } from 'types/socket'

import { SetRoomsConnectionParams } from './types'

export const setRoomsConnection = (data: SetRoomsConnectionParams) => {
  const { socket, userId, setActiveRooms, navigate, setUserRooms, setIsLoading } = data

  socket.emit(GET_ROOMS_SOCKET)
  socket.emit(GET_USER_ROOMS_SOCKET, { userId })

  socket.on(GET_ROOMS_SOCKET, setActiveRooms)
  socket.on(GET_USER_ROOMS_SOCKET, setUserRooms)
  socket.on(UPDATE_USER_ROOM_SUCCESS_SOCKET, () => setIsLoading(false))
  socket.on(DELETE_USER_ROOM_SUCCESS_SOCKET, () => setIsLoading(false))

  socket.on(CREATE_ERROR_SOCKET, (error) => {
    setIsLoading(false)
    toast.error(error)
  })

  socket.on(CREATE_SUCCESS_SOCKET, (id) => {
    setIsLoading(false)
    navigate(`${DRAW_ONLINE_URL}/${id}`, { state: true })
  })

  socket.on(UPDATE_USER_ROOM_ERROR_SOCKET, (error) => {
    setIsLoading(false)
    toast.error(error)
  })

  socket.on(DELETE_USER_ROOM_ERROR_SOCKET, (error) => {
    setIsLoading(false)
    toast.error(error)
  })

  socket.on(JOIN_ROOM_SUCCESS_SOCKET, (id) => {
    setIsLoading(false)
    navigate(`${DRAW_ONLINE_URL}/${id}`, { state: true })
  })

  socket.on(JOIN_ROOM_ERROR_SOCKET, (error) => {
    setIsLoading(false)
    toast.error(error)
  })
}

export const clearRoomsConnection = (socket: SocketApp) => {
  socket.off(GET_ROOMS_SOCKET)
  socket.off(CREATE_SUCCESS_SOCKET)
  socket.off(CREATE_ERROR_SOCKET)
  socket.off(JOIN_ROOM_SUCCESS_SOCKET)
  socket.off(JOIN_ROOM_ERROR_SOCKET)
  socket.off(GET_USER_ROOMS_SOCKET)
  socket.off(DELETE_USER_ROOM_ERROR_SOCKET)
  socket.off(DELETE_USER_ROOM_SUCCESS_SOCKET)
  socket.off(UPDATE_USER_ROOM_SUCCESS_SOCKET)
  socket.off(UPDATE_USER_ROOM_ERROR_SOCKET)
}
