import { DrawTools } from 'const/enums'
import { DRAW_SOCKET, FINISH_DRAW_SOCKET } from 'const/sockets'

import { DrawPenParams } from 'types/canvas'
import { SocketApp } from 'types/socket'

import { Tool } from './tool.class'

export class Pen extends Tool {
  private mouseDown = false

  constructor(canvas: React.MutableRefObject<HTMLCanvasElement>, socket: SocketApp, id: string) {
    super(canvas, socket, id)
    this.listen()
  }

  private listen() {
    this.canvas.current.onmousedown = this.onMouseDown.bind(this)
    this.canvas.current.onmousemove = this.onMouseMove.bind(this)
    this.canvas.current.onmouseup = this.onMouseUp.bind(this)
  }

  private onMouseUp() {
    this.mouseDown = false
    this.socket.emit(FINISH_DRAW_SOCKET, {
      roomId: this.id
    })
  }

  private onMouseDown() {
    this.mouseDown = true
  }

  private onMouseMove(e: MouseEvent) {
    if (this.mouseDown && this.ctx) {
      this.socket.emit(DRAW_SOCKET, {
        tool: DrawTools.PEN,
        roomId: this.id,
        x1: e.offsetX,
        y1: e.offsetY,
        strokeStyle: this.ctx.strokeStyle,
        lineWidth: this.ctx.lineWidth
      })
      Pen.draw(this.ctx, e.offsetX, e.offsetY)
    }
  }

  static draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  static drawOnline(data: DrawPenParams) {
    const { ctx, lineWidth, strokeStyle, x1, y1 } = data
    if (ctx) {
      ctx.strokeStyle = strokeStyle
      ctx.lineWidth = lineWidth
      ctx.lineTo(x1, y1)
      ctx.stroke()
      ctx.strokeStyle = this.strokeStyle
      ctx.lineWidth = this.lineWidth
    }
  }
}
