import { DrawTools } from 'const/enums'
import { DRAW_SOCKET, FINISH_DRAW_SOCKET } from 'const/sockets'

import { DrawCircleParams } from 'types/canvas'
import { SocketApp } from 'types/socket'

import { Tool } from './tool.class'

export class Circle extends Tool {
  private mouseDown = false
  private saved = ''
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
    this.saved = this.canvas.toDataURL()
  }

  private onMouseMove(e: MouseEvent) {
    if (this.mouseDown && this.ctx) {
      const img = new Image()
      img.src = this.saved
      img.onload = () => {
        this.draw(e, img)
      }
    }
  }

  private onMouseUp(e: MouseEvent) {
    this.mouseDown = false
    if (this.ctx) {
      this.socket.emit(DRAW_SOCKET, {
        roomId: this.id,
        tool: DrawTools.CIRCLE,
        x1: this.x1,
        y1: this.y1,
        x2: e.offsetY - this.y1,
        y2: e.offsetY - this.y1,
        fillStyle: this.ctx.fillStyle,
        strokeStyle: this.ctx.strokeStyle,
        lineWidth: this.ctx.lineWidth
      })
    }

    this.socket.emit(FINISH_DRAW_SOCKET, {
      roomId: this.id
    })

    this.x1 = e.offsetX
    this.y1 = e.offsetY
  }

  private draw(e: MouseEvent, img: HTMLImageElement) {
    const a = e.offsetX - this.x1
    const b = e.offsetY - this.y1
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    if (this.ctx) {
      this.ctx.beginPath()
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.arc(this.x1, this.y1, c / 2, 0, 2 * Math.PI)
      this.ctx.fill()
      this.ctx.stroke()
    }
  }

  static drawOnline({ x1, y1, x2, y2, ctx, fillStyle, lineWidth, strokeStyle }: DrawCircleParams) {
    if (ctx) {
      ctx.beginPath()
      const c = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2))

      ctx.fillStyle = fillStyle
      ctx.strokeStyle = strokeStyle
      ctx.lineWidth = lineWidth
      ctx.arc(x1, y1, c / 2, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()

      ctx.strokeStyle = this.strokeStyle
      ctx.lineWidth = this.lineWidth
      ctx.fillStyle = this.fillStyle
    }
  }
}
