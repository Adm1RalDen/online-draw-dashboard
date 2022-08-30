import { toastSuccess } from "services/toast.service";
import { Socket } from "socket.io-client";
import { NavigateFunction } from "react-router-dom";
import {
  Circle,
  Eraser,
  Line,
  Pen,
  Square,
} from "../../../canvas_classes/index";

export const CONNECTION_DRAW = "CONNECTION_DRAW";
export const FINISH_DRAW = "FINISH_DRAW";
export const CASE_EXIT = "CASE_EXIT";
export const DRAW = "DRAW";

type Props = {
  socket: Socket<any, any>;
  canvasRef: any;
  roomId: string;
  name: string;
  setSnapshotList: React.Dispatch<React.SetStateAction<string[]>>;
  navigate: NavigateFunction;
  fillStyle: string;
  strokeStyle: string;
  lineWidth: number;
  snapshotList: string[];
  setSnapshotIndex: React.Dispatch<React.SetStateAction<number>>;
  snapshotIndex: number;
};
export const SetDrawConnection = (data: Props) => {
  const { canvasRef, name, navigate, roomId, socket } = data;

  socket.emit(CONNECTION_DRAW, { userName: name, roomId });
  socket.on(CONNECTION_DRAW, (data: string) => {
    toastSuccess(data + " joined");
  });

  socket.on(FINISH_DRAW, () => {
    const ctx = canvasRef.current?.getContext("2d");
    ctx?.beginPath();
  });
  socket.on(CASE_EXIT, () => {
    navigate("/");
  });

  socket.on(DRAW, (data: any) => {
    console.log("DRAW");
    if (canvasRef.current) {
      const ctx = canvasRef.current?.getContext("2d");
      switch (data.tool) {
        case "pen":
          Pen.drawOnline(ctx, data.x, data.y, data.strokeStyle, data.lineWidth);
          break;
        case "square":
          Square.drawOnline(
            ctx,
            data.x1,
            data.y1,
            data.width,
            data.height,
            data.fillStyle,
            data.strokeStyle,
            data.lineWidth
          );
          break;
        case "circle":
          Circle.drawOnline(
            ctx,
            data.x1,
            data.y1,
            data.a,
            data.b,
            data.fillStyle,
            data.strokeStyle,
            data.lineWidth
          );
          break;
        case "eraser":
          Eraser.draw(ctx, data.x1, data.y1);
          break;
        case "line":
          Line.drawOnline(
            ctx,
            data.x1,
            data.y1,
            data.x2,
            data.y2,
            data.strokeStyle,
            data.lineWidth
          );
          break;
        default:
          Pen.drawOnline(ctx, data.x, data.y, data.strokeStyle, data.lineWidth);
          break;
      }
    }
  });
};

export const ClearDrawConnection = (socket: Socket<any, any>) => {
  socket.off(CONNECTION_DRAW);
  socket.off(FINISH_DRAW);
  socket.off(CASE_EXIT);
};
