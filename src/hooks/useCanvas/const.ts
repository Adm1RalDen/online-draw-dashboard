import { Circle, Eraser, Line, Pen, Square } from 'canvas_classes'
import { Socket } from 'socket.io-client'

import { ToolsEnum } from './types'

type Props = {
  tool: string
  canvasRef: React.MutableRefObject<HTMLCanvasElement>
  socket: Socket<any, any>
  roomId: string
}

export const setCanvasWidth = () => {
  return document.body.clientWidth >= 1400 ? 1190 : document.body.clientWidth - 210
}

export const setCanvasHeight = () => {
  return document.body.clientHeight - 150
}

export const handleSetTool = (data: Props) => {
  const { canvasRef, roomId, socket, tool } = data

  switch (tool) {
    case ToolsEnum.pen:
      new Pen(canvasRef, socket, roomId)
      break
    case ToolsEnum.square:
      new Square(canvasRef, socket, roomId)
      break
    case ToolsEnum.circle:
      new Circle(canvasRef, socket, roomId)
      break
    case ToolsEnum.eraser:
      new Eraser(canvasRef, socket, roomId)
      break
    case ToolsEnum.line:
      new Line(canvasRef, socket, roomId)
      break
    default:
      new Pen(canvasRef, socket, roomId)
  }
}
