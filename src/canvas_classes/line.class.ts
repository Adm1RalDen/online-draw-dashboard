import { DrawTools } from 'const/enums'
import { DRAW_SOCKET, FINISH_DRAW_SOCKET } from 'const/sockets'

import { DrawLineParams } from 'types/canvas'
import { SocketApp } from 'types/socket'

import { Tool } from './tool.class'

export class Line extends Tool {
  private mouseDown = false
  private saved = ''
  private x1 = 0
  private y1 = 0

  constructor(canvas: React.MutableRefObject<HTMLCanvasElement>, socket: SocketApp, id: string) {
    super(canvas, socket, id)
    this.listen()
  }

  private listen() {
    this.canvas.current.onmousedown = this.onMouseDown.bind(this)
    this.canvas.current.onmousemove = this.onMouseMove.bind(this)
    this.canvas.current.onmouseup = this.onMouseUp.bind(this)
  }

  private onMouseUp(e: MouseEvent) {
    this.mouseDown = false
    if (this.ctx) {
      this.socket.emit(DRAW_SOCKET, {
        tool: DrawTools.LINE,
        roomId: this.id,
        x1: this.x1,
        y1: this.y1,
        x2: e.offsetX,
        y2: e.offsetY,
        lineWidth: this.ctx.lineWidth,
        strokeStyle: this.ctx.strokeStyle
      })
    }

    this.socket.emit(FINISH_DRAW_SOCKET, {
      roomId: this.id
    })

    this.x1 = 0
    this.y1 = 0
  }

  private onMouseDown(e: MouseEvent) {
    this.mouseDown = true
    this.saved = this.canvas.current.toDataURL()
    this.x1 = e.offsetX
    this.y1 = e.offsetY
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

  private draw(e: MouseEvent, img: HTMLImageElement) {
    if (this.ctx && this.mouseDown) {
      this.ctx.beginPath()
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.ctx.drawImage(img, 0, 0, this.width, this.height)
      this.ctx.moveTo(this.x1, this.y1)
      this.ctx.lineTo(e.offsetX, e.offsetY)
      this.ctx.stroke()
    }
  }

  static drawOnline(data: DrawLineParams) {
    const { ctx, lineWidth, strokeStyle, x1, x2, y1, y2 } = data

    if (ctx) {
      ctx.beginPath()
      ctx.strokeStyle = strokeStyle
      ctx.lineWidth = lineWidth
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.strokeStyle = this.strokeStyle
      ctx.lineWidth = this.lineWidth
    }
  }
}
