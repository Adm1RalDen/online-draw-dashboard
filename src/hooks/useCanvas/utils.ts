import { Circle, Eraser, Line, Pen, Square } from 'canvas_classes'

import { DrawTools } from 'const/enums'

import { handleSetToolParams } from './types'

export const setCanvasWidth = () => {
  return document.body.clientWidth >= 1400 ? 1190 : document.body.clientWidth - 210
}

export const setCanvasHeight = () => {
  return document.body.clientHeight - 150
}

export const handleSetTool = ({ canvas, roomId, socket, tool }: handleSetToolParams) => {
  switch (tool) {
    case DrawTools.PEN:
      new Pen(canvas, socket, roomId)
      break
    case DrawTools.SQUARE:
      new Square(canvas, socket, roomId)
      break
    case DrawTools.CIRCLE:
      new Circle(canvas, socket, roomId)
      break
    case DrawTools.ERASER:
      new Eraser(canvas, socket, roomId)
      break
    case DrawTools.LINE:
      new Line(canvas, socket, roomId)
      break
    default:
      new Pen(canvas, socket, roomId)
  }
}
