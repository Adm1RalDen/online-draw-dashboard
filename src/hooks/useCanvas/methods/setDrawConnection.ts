import { Circle, Eraser, Line, Pen, Square } from 'canvas_classes'
import { toast } from 'react-toastify'

import { DrawTools } from 'const/enums'
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

import { DrawPenParams, SocketDrawResponse } from 'types/canvas'
import { SocketApp } from 'types/socket'

import { DrawConnectionProps } from '../types'

export const setDrawConnection = (data: DrawConnectionProps) => {
  const { canvasRef, name, roomId, socket, userId, navigate } = data

  const ctx = canvasRef.current.getContext('2d')

  socket.emit(GET_SNAPSHOT_SOCKET, { roomId, userId, socketId: socket.id })
  socket.emit(CONNECTION_DRAW_SOCKET, { userName: name, roomId })

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
      switch (data.tool) {
        case DrawTools.PEN:
          Pen.drawOnline({ ctx, ...data })
          break
        case DrawTools.SQUARE:
          Square.drawOnline({ ctx, ...data })
          break
        case DrawTools.CIRCLE:
          Circle.drawOnline({ ctx, ...data })
          break
        case DrawTools.ERASER:
          Eraser.draw({ ctx, ...data })
          break
        case DrawTools.LINE:
          Line.drawOnline({ ctx, ...data })
          break
        default:
          Pen.drawOnline({ ctx, ...(data as SocketDrawResponse) } as DrawPenParams)
      }
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
