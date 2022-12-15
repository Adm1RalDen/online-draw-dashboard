import { toast } from 'react-toastify'

import { draw } from 'const/canvas'
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

import { DrawConnectionProps } from 'types/hooks'
import { SocketApp } from 'types/socket'

export const setDrawConnection = ({
  userName,
  canvas,
  roomId,
  socket,
  userId,
  navigate
}: DrawConnectionProps) => {
  const ctx = canvas.getContext('2d')

  socket.emit(GET_SNAPSHOT_SOCKET, { roomId, userId, socketId: socket.id })
  socket.emit(CONNECTION_DRAW_SOCKET, { userName, roomId, userId })

  socket.on(SEND_SNAPSHOT_SOCKET, (ownerId, recipient) => {
    if (ownerId === userId) {
      const img = canvas.toDataURL()
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

export const clearDrawConnection = (socket: SocketApp) => {
  socket.off(CONNECTION_DRAW_SOCKET)
  socket.off(FINISH_DRAW_SOCKET)
  socket.off(CASE_EXIT_SOCKET)
  socket.off(DRAW_SOCKET)
  socket.off(SEND_SNAPSHOT_SOCKET)
  socket.off(SET_SNAPSHOT_SOCKET)
}
