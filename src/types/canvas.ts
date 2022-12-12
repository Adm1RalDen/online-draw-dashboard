import { DrawTools } from 'const/enums'

import { FunctionWithParams } from 'types'

export interface PaintContextTypes {
  canvasRef: React.Ref<HTMLCanvasElement>
  tool: DrawTools
  snapshot: string | null
  setToolhandler: FunctionWithParams<DrawTools>
  changeFillStyle: FunctionWithParams<string>
  changeStrokeStyle: FunctionWithParams<string>
  changeLineWidth: FunctionWithParams<number>
  handleReset: VoidFunction
  handleRedo: VoidFunction
  handleSnapshot: VoidFunction
}

export interface DrawCircleParams {
  ctx: CanvasRenderingContext2D
  x1: number
  y1: number
  x2: number
  y2: number
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

type ResponseType<T, D> = Omit<T, 'ctx'> & { tool: D }

export type SocketDrawResponse =
  | ResponseType<DrawCircleParams, DrawTools.CIRCLE>
  | ResponseType<DrawEraserParams, DrawTools.ERASER>
  | ResponseType<DrawLineParams, DrawTools.LINE>
  | ResponseType<DrawPenParams, DrawTools.PEN>
  | ResponseType<DrawSquareParams, DrawTools.SQUARE>

export type SocketDrawRequest = SocketDrawResponse & {
  roomId: string
}
