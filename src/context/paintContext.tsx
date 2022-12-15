import { createContext } from 'react'

import { DrawTools } from 'const/enums'

import { noopFunction } from 'utils/noop'

import { PaintContextTypes } from 'types/canvas'

export const PaintContext = createContext<PaintContextTypes>({
  setToolhandler: noopFunction,
  changeFillStyle: noopFunction,
  changeStrokeStyle: noopFunction,
  changeLineWidth: noopFunction,
  handleReset: noopFunction,
  handleRedo: noopFunction,
  handleSnapshot: noopFunction,
  ref: { current: null },
  tool: DrawTools.PEN,
  canvas: null,
  snapshot: null
})
