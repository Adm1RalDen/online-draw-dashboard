import { Socket } from "socket.io-client";

export class Tool {
  protected canvas;
  protected ctx;
  protected width = 1200;
  protected height = 550;
  protected socket;
  protected id;
  static strokeStyle = "#000";
  static fillStyle = "#000";
  static lineWidth = 1;

  constructor(
    canvas: React.MutableRefObject<HTMLCanvasElement>,
    socket: Socket<any, any>,
    id: string
  ) {
    this.canvas = canvas;
    this.socket = socket;
    this.id = id;
    this.ctx = canvas.current.getContext("2d");
    this.width = canvas.current.width;
    this.height = canvas.current.height;
  }

  static changeFillStyle(ctx: CanvasRenderingContext2D | null, color: string) {
    if (ctx) {
      ctx.fillStyle = color;
    }
  }

  static changeStrokeStyle(
    ctx: CanvasRenderingContext2D | null,
    color: string
  ) {
    if (ctx) {
      ctx.strokeStyle = color;
    }
  }

  static changeLineWidth(ctx: CanvasRenderingContext2D | null, size: number) {
    if (ctx) {
      ctx.lineWidth = size;
    }
  }

  static setSnapshot(
    ctx: CanvasRenderingContext2D | null,
    snapshot: string | null
  ) {
    if (snapshot && ctx) {
      const img = new Image();
      img.src = snapshot;
      img.onload = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
      };
    }
  }
}
