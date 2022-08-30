import { Socket } from "socket.io-client";
import { Line } from "./../../canvas_classes/line.class";
import { Eraser } from "./../../canvas_classes/eraser.class";
import { Circle } from "./../../canvas_classes/circle.class";
import { Square } from "./../../canvas_classes/square.class";
import { Pen } from "./../../canvas_classes/pen.class";

type Props = {
  tool: string;
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
  socket: Socket<any, any>;
  roomId: string;
};

export const setCanvasWidth = () => {
  return document.body.clientWidth >= 1400
    ? 1190
    : document.body.clientWidth - 210;
};

export const setCanvasHeight = () => {
  return document.body.clientHeight - 150;
};

export const handleSetTool = (data: Props) => {
  const { canvasRef, roomId, socket, tool } = data;

  switch (tool) {
    case "pen":
      new Pen(canvasRef, socket, roomId);
      break;
    case "square":
      new Square(canvasRef, socket, roomId);
      break;
    case "circle":
      new Circle(canvasRef, socket, roomId);
      break;
    case "eraser":
      new Eraser(canvasRef, socket, roomId);
      break;
    case "line":
      new Line(canvasRef, socket, roomId);
      break;
    default:
      new Pen(canvasRef, socket, roomId);
  }
};
