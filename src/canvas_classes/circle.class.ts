import { Socket } from "socket.io-client";
import { Tool } from "./tool.class";

export class Circle extends Tool {
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
        this.draw(e, img);
      };
    }
  }

  private onMouseUp(e: MouseEvent) {
    this.mouseDown = false;
    if (this.ctx) {
      this.socket.emit("DRAW", {
        roomId: this.id,
        tool: "circle",
        x1: this.x1,
        y1: this.y1,
        a: e.offsetY - this.y1,
        b: e.offsetY - this.y1,
        fillStyle: this.ctx.fillStyle,
        strokeStyle: this.ctx.strokeStyle,
        lineWidth: this.ctx.lineWidth,
      });
    }
    this.x1 = e.offsetX;
    this.y1 = e.offsetY;
  }

  private draw(e: MouseEvent, img: HTMLImageElement) {
    let a = e.offsetX - this.x1;
    let b = e.offsetY - this.y1;
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.drawImage(img, 0, 0, this.width, this.height);
      this.ctx.beginPath();
      this.ctx.arc(this.x1, this.y1, c / 2, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  static drawOnline(
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    a: number,
    b: number,
    fillStyle: string,
    strokeStyle: string,
    lineWidht: number
  ) {
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    if (ctx) {
      const strokeStyleDefault = ctx.strokeStyle;
      const lineWidthDefault = ctx.lineWidth;
      const fillStyleDefault = ctx.fillStyle;
      ctx.fillStyle = fillStyle;
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidht;

      ctx.beginPath();
      ctx.arc(x1, y1, c / 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
      ctx.strokeStyle = strokeStyleDefault;
      ctx.lineWidth = lineWidthDefault;
      ctx.fillStyle = fillStyleDefault;
    }
  }
}
