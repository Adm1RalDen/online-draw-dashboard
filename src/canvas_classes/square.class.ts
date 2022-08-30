import { Socket } from "socket.io-client";
import { Tool } from "./tool.class";

export class Square extends Tool {
  private mouseDown = false;
  private x1 = 0;
  private y1 = 0;
  private saved = "";

  constructor(
    canvas: React.MutableRefObject<HTMLCanvasElement>,
    socket: Socket<any, any>,
    id: string
  ) {
    super(canvas, socket, id);
    this.listen();
  }

  private listen() {
    this.canvas.current.onmousedown = this.onMouseDown.bind(this);
    this.canvas.current.onmousemove = this.onMouseMove.bind(this);
    this.canvas.current.onmouseup = this.onMouseUp.bind(this);
  }

  private onMouseDown(e: MouseEvent) {
    this.mouseDown = true;
    this.x1 = e.offsetX;
    this.y1 = e.offsetY;
    this.saved = this.canvas.current.toDataURL();
  }

  private onMouseMove(e: MouseEvent) {
    if (this.mouseDown && this.ctx) {
      let img = new Image();
      img.src = this.saved;
      img.onload = () => {
        Square.draw(
          this.ctx,
          this.canvas,
          this.x1,
          this.y1,
          e.offsetX - this.x1,
          e.offsetY - this.y1,
          img
        );
      };
    }
  }

  private onMouseUp(e: MouseEvent) {
    this.mouseDown = false;
    if (this.ctx) {
      this.socket.emit("DRAW", {
        tool: "square",
        roomId: this.id,
        x1: this.x1,
        y1: this.y1,
        width: e.offsetX - this.x1,
        height: e.offsetY - this.y1,
        fillStyle: this.ctx.fillStyle,
        strokeStyle: this.ctx.strokeStyle,
        lineWidth: this.ctx.lineWidth,
      });
    }
    this.x1 = 0;
    this.y1 = 0;
  }

  static draw(
    ctx: any,
    canvas: any,
    x1: number,
    y1: number,
    widht: number,
    height: number,
    img: HTMLImageElement
  ) {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      ctx.drawImage(img, 0, 0, canvas.current.width, canvas.current.height);
      ctx.beginPath();
      ctx.rect(x1, y1, widht, height);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
  }

  static drawOnline(
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    width: number,
    height: number,
    fillStyle: string,
    strokeStyle: string,
    lineWidht: number
  ) {
    if (ctx) {
      const strokeStyleDefault = ctx.strokeStyle;
      const lineWidthDefault = ctx.lineWidth;
      const fillStyleDefault = ctx.fillStyle;

      ctx.fillStyle = fillStyle;
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidht;
      ctx.beginPath();
      ctx.rect(x1, y1, width, height);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
      ctx.strokeStyle = strokeStyleDefault;
      ctx.lineWidth = lineWidthDefault;
      ctx.fillStyle = fillStyleDefault;
    }
  }
}
