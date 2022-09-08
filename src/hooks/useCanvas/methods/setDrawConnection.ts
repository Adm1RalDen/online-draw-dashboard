import { Circle, Eraser, Line, Pen, Square } from 'canvas_classes'
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
import { toastSuccess } from 'services/toast.service'
import { Socket } from 'socket.io-client'

import { DrawConnectionProps, ToolsEnum } from '../types'

export const SetDrawConnection = (data: DrawConnectionProps) => {
  const { canvasRef, name, navigate, roomId, socket, userId } = data
  const ctx = canvasRef.current.getContext('2d')

  socket.emit(GET_SNAPSHOT_SOCKET, { roomId, userId, socketId: socket.id })
  socket.on(SEND_SNAPSHOT_SOCKET, (ownerId: string, recipient: string) => {
    if (canvasRef.current && ownerId === userId) {
      const img = canvasRef.current.toDataURL()
      socket.emit(SEND_SNAPSHOT_SOCKET, { img, recipient })
    }
  })

  socket.on(SET_SNAPSHOT_SOCKET, (img: string) => {
    if (ctx) {
      const image = new Image()
      image.src = img
      image.onload = () => {
        ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height)
      }
    }
  })

  socket.emit(CONNECTION_DRAW_SOCKET, { userName: name, roomId })
  socket.on(CONNECTION_DRAW_SOCKET, (data: string) => {
    toastSuccess(`${data} ${USER_JOINED}`)
  })

  socket.on(FINISH_DRAW_SOCKET, () => {
    ctx?.beginPath()
  })
  socket.on(CASE_EXIT_SOCKET, () => {
    navigate(HOME_URL)
  })

  socket.on(DRAW_SOCKET, (data: any) => {
    if (ctx) {
      switch (data.tool) {
        case ToolsEnum.pen:
          Pen.drawOnline({ ctx, ...data })
          break
        case ToolsEnum.square:
          Square.drawOnline({ ctx, ...data })
          break
        case ToolsEnum.circle:
          Circle.drawOnline({ ctx, ...data })
          break
        case ToolsEnum.eraser:
          Eraser.draw({ ctx, ...data })
          break
        case ToolsEnum.line:
          Line.drawOnline({ ctx, ...data })
          break
        default:
          Pen.drawOnline({ ctx, ...data })
          break
      }
    }
  })
}

export const ClearDrawConnection = (socket: Socket<any, any>) => {
  socket.off(CONNECTION_DRAW_SOCKET)
  socket.off(FINISH_DRAW_SOCKET)
  socket.off(CASE_EXIT_SOCKET)
  socket.off(DRAW_SOCKET)
  socket.off(SEND_SNAPSHOT_SOCKET)
  socket.off(SET_SNAPSHOT_SOCKET)
}
