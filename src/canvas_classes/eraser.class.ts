import { Socket } from "socket.io-client";
import { Tool } from "./tool.class";

export class Eraser extends Tool {
  private mouseDown = false;
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
  }

  private onMouseMove(e: MouseEvent) {
    if (this.ctx && this.mouseDown) {
      this.socket.emit("DRAW", {
        tool: "eraser",
        roomId: this.id,
        x1: this.x1,
        y1: this.y1,
      });
      Eraser.draw(this.ctx, this.x1, this.y1);
    }

    this.x1 = e.offsetX;
    this.y1 = e.offsetY;
  }

  private onMouseUp() {
    this.mouseDown = false;
  }

  static draw(ctx: CanvasRenderingContext2D, x1: number, y1: number) {
    if (ctx) {
      ctx.beginPath();
      ctx.arc(x1, y1, 20, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.closePath();
    }
  }
}
