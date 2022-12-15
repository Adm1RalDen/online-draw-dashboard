import { colors } from 'styles/colors'

import { DrawTools } from 'const/enums'
import { DRAW_SOCKET, FINISH_DRAW_SOCKET } from 'const/sockets'

import { DrawEraserParams } from 'types/canvas'
import { SocketApp } from 'types/socket'

import { Tool } from './tool.class'

export class Eraser extends Tool {
  private mouseDown = false
  private x1 = 0
  private y1 = 0

  constructor(canvas: HTMLCanvasElement, socket: SocketApp, id: string) {
    super(canvas, socket, id)
    this.listen()
  }

  private listen() {
    this.canvas.onmousedown = this.onMouseDown.bind(this)
    this.canvas.onmousemove = this.onMouseMove.bind(this)
    this.canvas.onmouseup = this.onMouseUp.bind(this)
  }

  private onMouseDown(e: MouseEvent) {
    this.mouseDown = true
    this.x1 = e.offsetX
    this.y1 = e.offsetY

    this.socket.emit(FINISH_DRAW_SOCKET, {
      roomId: this.id
    })
  }

  private onMouseMove(e: MouseEvent) {
    if (this.ctx && this.mouseDown) {
      this.socket.emit(DRAW_SOCKET, {
        tool: DrawTools.ERASER,
        roomId: this.id,
        x1: this.x1,
        y1: this.y1
      })

      Eraser.drawOnline({ ctx: this.ctx, x1: this.x1, y1: this.y1 })
    }

    this.x1 = e.offsetX
    this.y1 = e.offsetY
  }

  private onMouseUp() {
    this.mouseDown = false
  }

  static drawOnline({ ctx, x1, y1 }: DrawEraserParams) {
    if (ctx) {
      ctx.beginPath()
      ctx.arc(x1, y1, 20, 0, Math.PI * 2)
      ctx.fillStyle = colors.white
      ctx.fill()
      ctx.fillStyle = this.fillStyle
    }
  }
}
