import { Circle, Eraser, Line, Pen, Square } from 'canvas_classes'

import { DrawTools } from 'const/enums'

export const setCanvasWidth = () => {
  return document.body.clientWidth >= 1400 ? 1190 : document.body.clientWidth - 210
}

export const setCanvasHeight = () => {
  return document.body.clientHeight - 150
}

export const draw = {
  [DrawTools.PEN]: Pen,
  [DrawTools.SQUARE]: Square,
  [DrawTools.CIRCLE]: Circle,
  [DrawTools.ERASER]: Eraser,
  [DrawTools.LINE]: Line
}
