import { toast } from 'react-toastify'

import { USER_JOINED } from 'const/messages'
import {
  CASE_EXIT_SOCKET,
  CONNECTION_DRAW_SOCKET,
  DRAW_SOCKET,
  FINISH_DRAW_SOCKET,
  GET_SNAPSHOT_SOCKET,
  SEND_SNAPSHOT_SOCKET,
  SET_SNAPSHOT_SOCKET
} from 'const/sockets'
import { HOME_URL } from 'const/urls'

import { SocketApp } from 'types/socket'

import { draw } from '../const'
import { DrawConnectionProps } from '../types'

export const SetDrawConnection = (data: DrawConnectionProps) => {
  const { canvasRef, name, navigate, roomId, socket, userId } = data
  const ctx = canvasRef.current.getContext('2d')

  socket.emit(GET_SNAPSHOT_SOCKET, { roomId, userId, socketId: socket.id })
  socket.on(SEND_SNAPSHOT_SOCKET, (ownerId, recipient) => {
    if (canvasRef.current && ownerId === userId) {
      const img = canvasRef.current.toDataURL()
      socket.emit(SEND_SNAPSHOT_SOCKET, { img, recipient })
    }
  })

  socket.on(SET_SNAPSHOT_SOCKET, (img) => {
    if (ctx) {
      const image = new Image()
      image.src = img
      image.onload = () => {
        ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height)
      }
    }
  })

  socket.emit(CONNECTION_DRAW_SOCKET, { userName: name, roomId })
  socket.on(CONNECTION_DRAW_SOCKET, (data) => {
    toast.success(`${data} ${USER_JOINED}`)
  })

  socket.on(FINISH_DRAW_SOCKET, () => {
    ctx?.beginPath()
  })
  socket.on(CASE_EXIT_SOCKET, () => {
    navigate(HOME_URL)
  })

  socket.on(DRAW_SOCKET, (data) => {
    if (ctx) {
      const drawTool = draw[data.tool].drawOnline

      drawTool({ ctx, ...data } as Parameters<keyof typeof drawTool>)
    }
  })
}

export const ClearDrawConnection = (socket: SocketApp) => {
  socket.off(CONNECTION_DRAW_SOCKET)
  socket.off(FINISH_DRAW_SOCKET)
  socket.off(CASE_EXIT_SOCKET)
  socket.off(DRAW_SOCKET)
  socket.off(SEND_SNAPSHOT_SOCKET)
  socket.off(SET_SNAPSHOT_SOCKET)
}
