import { Circle, Eraser, Line, Pen, Square } from 'canvas_classes'

import { DrawTools } from 'const/enums'

import { handleSetToolParams } from './types'

export const setCanvasWidth = () => {
  return document.body.clientWidth >= 1400 ? 1190 : document.body.clientWidth - 210
}

export const setCanvasHeight = () => {
  return document.body.clientHeight - 150
}

export const handleSetTool = (data: handleSetToolParams) => {
  const { canvasRef, roomId, socket, tool } = data

  switch (tool) {
    case DrawTools.PEN:
      new Pen(canvasRef, socket, roomId)
      break
    case DrawTools.SQUARE:
      new Square(canvasRef, socket, roomId)
      break
    case DrawTools.CIRCLE:
      new Circle(canvasRef, socket, roomId)
      break
    case DrawTools.ERASER:
      new Eraser(canvasRef, socket, roomId)
      break
    case DrawTools.LINE:
      new Line(canvasRef, socket, roomId)
      break
    default:
      new Pen(canvasRef, socket, roomId)
  }
}
