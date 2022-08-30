import { Socket } from "socket.io-client";
import { Tool } from "./tool.class";

export class Line extends Tool {
  private mouseDown = false;
  private saved = "";
  private x1 = 0;
  private y1 = 0;

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

  private onMouseUp(e: any) {
    this.mouseDown = false;
    if (this.ctx) {
      this.socket.emit("DRAW", {
        tool: "line",
        roomId: this.id,
        x1: this.x1,
        y1: this.y1,
        x2: e.offsetX,
        y2: e.offsetY,
        lineWidth: this.ctx.lineWidth,
        strokeStyle: this.ctx.strokeStyle,
      });
    }
    this.x1 = 0;
    this.y1 = 0;
  }

  private onMouseDown(e: MouseEvent) {
    this.mouseDown = true;
    this.saved = this.canvas.current.toDataURL();
    this.x1 = e.offsetX;
    this.y1 = e.offsetY;
  }

  private onMouseMove(e: MouseEvent) {
    if (this.mouseDown && this.ctx) {
      let img = new Image();
      img.src = this.saved;
      img.onload = () => {
        this.draw(e, img);
      };
    }
  }

  private draw(e: MouseEvent, img: HTMLImageElement) {
    if (this.ctx && this.mouseDown) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.drawImage(img, 0, 0, this.width, this.height);
      this.ctx.beginPath();
      this.ctx.moveTo(this.x1, this.y1);
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  static drawOnline(
    ctx: any,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    strokeStyle: string,
    lineWidth: string
  ) {
    if (ctx) {
      const strokeStyleDefault = ctx.strokeStyle;
      const lineWidthDefault = ctx.lineWidth;

      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.strokeStyle = strokeStyleDefault;
      ctx.lineWidth = lineWidthDefault;
    }
  }
}
