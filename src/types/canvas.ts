import { DrawTools } from 'const/enums'

import { FunctionWithParams } from 'types'

export interface PaintContextTypes {
  canvas: HTMLCanvasElement | null
  ref: React.RefObject<HTMLCanvasElement>
  tool: DrawTools
  snapshot: string | null
  setToolhandler: FunctionWithParams<DrawTools>
  changeFillStyle: (ctx: CanvasRenderingContext2D | null, color: string) => void
  changeStrokeStyle: (ctx: CanvasRenderingContext2D | null, color: string) => void
  changeLineWidth: (ctx: CanvasRenderingContext2D | null, size: number) => void
  handleReset: VoidFunction
  handleRedo: VoidFunction
  handleSnapshot: VoidFunction
}

export interface DrawCircleParams {
  ctx: CanvasRenderingContext2D
  x1: number
  y1: number
  a: number
  b: number
  fillStyle: string | CanvasGradient | CanvasPattern
  strokeStyle: string | CanvasGradient | CanvasPattern
  lineWidth: number
}

export interface DrawEraserParams {
  ctx: CanvasRenderingContext2D
  x1: number
  y1: number
}

export interface DrawLineParams {
  ctx: CanvasRenderingContext2D
  x1: number
  y1: number
  x2: number
  y2: number
  strokeStyle: string | CanvasGradient | CanvasPattern
  lineWidth: number
}

export interface DrawPenParams {
  ctx: CanvasRenderingContext2D
  x1: number
  y1: number
  strokeStyle: string | CanvasGradient | CanvasPattern
  lineWidth: number
}

export interface DrawSquareParams {
  ctx: CanvasRenderingContext2D
  x1: number
  y1: number
  width: number
  height: number
  fillStyle: string | CanvasGradient | CanvasPattern
  strokeStyle: string | CanvasGradient | CanvasPattern
  lineWidth: number
}

export type SocketDrawResponse =
  | (Omit<DrawCircleParams, 'ctx'> & { tool: DrawTools.CIRCLE })
  | (Omit<DrawEraserParams, 'ctx'> & { tool: DrawTools.ERASER })
  | (Omit<DrawLineParams, 'ctx'> & { tool: DrawTools.LINE })
  | (Omit<DrawPenParams, 'ctx'> & { tool: DrawTools.PEN })
  | (Omit<DrawSquareParams, 'ctx'> & { tool: DrawTools.SQUARE })

export type SocketDrawRequest = SocketDrawResponse & {
  roomId: string
}
