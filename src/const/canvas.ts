import { Circle, Eraser, Line, Pen, Square } from 'canvas_classes'

import { DrawTools } from './enums'

export const draw = {
  [DrawTools.PEN]: Pen,
  [DrawTools.SQUARE]: Square,
  [DrawTools.CIRCLE]: Circle,
  [DrawTools.ERASER]: Eraser,
  [DrawTools.LINE]: Line
}
