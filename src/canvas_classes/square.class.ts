import { DrawTools } from 'const/enums'
import { DRAW_SOCKET, FINISH_DRAW_SOCKET } from 'const/sockets'

import { DrawSquareParams } from 'types/canvas'
import { SocketApp } from 'types/socket'

import { Tool } from './tool.class'

export class Square extends Tool {
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
        Square.draw(
          this.ctx,
          this.canvas,
          this.x1,
          this.y1,
          e.offsetX - this.x1,
          e.offsetY - this.y1,
          img
        )
      }
    }
  }

  private onMouseUp(e: MouseEvent) {
    this.mouseDown = false
    if (this.ctx) {
      this.socket.emit(DRAW_SOCKET, {
        tool: DrawTools.SQUARE,
        roomId: this.id,
        x1: this.x1,
        y1: this.y1,
        width: e.offsetX - this.x1,
        height: e.offsetY - this.y1,
        fillStyle: this.ctx.fillStyle,
        strokeStyle: this.ctx.strokeStyle,
        lineWidth: this.ctx.lineWidth
      })
    }

    this.socket.emit(FINISH_DRAW_SOCKET, {
      roomId: this.id
    })

    this.x1 = 0
    this.y1 = 0
  }

  static draw(
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement,
    x1: number,
    y1: number,
    widht: number,
    height: number,
    img: HTMLImageElement
  ) {
    if (ctx) {
      ctx.beginPath()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      ctx.rect(x1, y1, widht, height)
      ctx.fill()
      ctx.stroke()
    }
  }

  static drawOnline(data: DrawSquareParams) {
    const { ctx, fillStyle, height, lineWidth, strokeStyle, width, x1, y1 } = data

    if (ctx) {
      ctx.beginPath()
      ctx.fillStyle = fillStyle
      ctx.strokeStyle = strokeStyle
      ctx.lineWidth = lineWidth
      ctx.rect(x1, y1, width, height)
      ctx.fill()
      ctx.stroke()
      ctx.strokeStyle = this.strokeStyle
      ctx.lineWidth = this.lineWidth
      ctx.fillStyle = this.fillStyle
    }
  }
}
