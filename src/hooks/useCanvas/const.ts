import { Circle, Eraser, Line, Pen, Square } from 'canvas_classes'

import { DrawTools } from 'const/enums'

import { handleSetToolParams } from './types'

export const setCanvasWidth = () => {
  return document.body.clientWidth >= 1400 ? 1190 : document.body.clientWidth - 210
}

export const setCanvasHeight = () => {
  return document.body.clientHeight - 150
}

export const handleSetTool = ({ canvasRef, roomId, socket, tool }: handleSetToolParams) => {
  const draw = {
    [DrawTools.PEN]: () => new Pen(canvasRef, socket, roomId),
    [DrawTools.SQUARE]: () => new Square(canvasRef, socket, roomId),
    [DrawTools.CIRCLE]: () => new Circle(canvasRef, socket, roomId),
    [DrawTools.ERASER]: () => new Eraser(canvasRef, socket, roomId),
    [DrawTools.LINE]: () => new Line(canvasRef, socket, roomId)
  }

  draw[tool]()
}
