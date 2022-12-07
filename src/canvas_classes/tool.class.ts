import { colors } from 'styles/colors'

import { SocketApp } from 'types/socket'

export class Tool {
  protected id
  protected ctx
  protected width = 1200
  protected height = 550
  protected socket
  protected canvas
  static lineWidth = 1
  static strokeStyle = colors.black
  static fillStyle = colors.black

  constructor(canvas: HTMLCanvasElement, socket: SocketApp, id: string) {
    this.canvas = canvas
    this.socket = socket
    this.id = id
    this.ctx = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height
  }

  static changeFillStyle(ctx: CanvasRenderingContext2D | null, color: string) {
    if (ctx) {
      ctx.fillStyle = color
    }
  }

  static changeStrokeStyle(ctx: CanvasRenderingContext2D | null, color: string) {
    if (ctx) {
      ctx.strokeStyle = color
    }
  }

  static changeLineWidth(ctx: CanvasRenderingContext2D | null, size: number) {
    if (ctx) {
      ctx.lineWidth = size
    }
  }

  static setSnapshot(ctx: CanvasRenderingContext2D | null, snapshot: string | null) {
    if (snapshot && ctx) {
      const img = new Image()
      img.src = snapshot
      img.onload = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height)
      }
    }
  }
}
