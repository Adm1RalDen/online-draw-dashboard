import {
  CASE_EXIT_SOCKET,
  CONNECTION_DRAW_SOCKET,
  DRAW_SOCKET,
  FINISH_DRAW_SOCKET,
  GET_SNAPSHOT_SOCKET,
  SEND_SNAPSHOT_SOCKET,
  SET_SNAPSHOT_SOCKET,
} from "const/sockets";
import { HOME_URL } from "const/urls";
import { NavigateFunction } from "react-router-dom";
import { toastSuccess } from "services/toast.service";
import { Socket } from "socket.io-client";

import {
  Circle,
  Eraser,
  Line,
  Pen,
  Square,
} from "../../../canvas_classes/index";

type Props = {
  socket: Socket<any, any>;
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
  roomId: string;
  name: string;
  userId: string;
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
  const { canvasRef, name, navigate, roomId, socket, userId } = data;
  socket.emit(GET_SNAPSHOT_SOCKET, { roomId, userId, socketId: socket.id });
  socket.on(SEND_SNAPSHOT_SOCKET, (ownerId: string, recipient: string) => {
    if (canvasRef && ownerId === userId) {
      const img = canvasRef.current.toDataURL();
      socket.emit(SEND_SNAPSHOT_SOCKET, { img, recipient });
    }
  });

  socket.on(SET_SNAPSHOT_SOCKET, (img: string) => {
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      let image = new Image();
      image.src = img;
      image.onload = () => {
        ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
      };
    }
  });

  socket.emit(CONNECTION_DRAW_SOCKET, { userName: name, roomId });
  socket.on(CONNECTION_DRAW_SOCKET, (data: string) => {
    toastSuccess(data + " joined");
  });

  socket.on(FINISH_DRAW_SOCKET, () => {
    const ctx = canvasRef.current?.getContext("2d");
    ctx?.beginPath();
  });
  socket.on(CASE_EXIT_SOCKET, () => {
    navigate(HOME_URL);
  });

  socket.on(DRAW_SOCKET, (data: any) => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        switch (data.tool) {
          case "pen":
            Pen.drawOnline(
              ctx,
              data.x,
              data.y,
              data.strokeStyle,
              data.lineWidth
            );
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
            Pen.drawOnline(
              ctx,
              data.x,
              data.y,
              data.strokeStyle,
              data.lineWidth
            );
            break;
        }
      }
    }
  });
};

export const ClearDrawConnection = (socket: Socket<any, any>) => {
  socket.off(CONNECTION_DRAW_SOCKET);
  socket.off(FINISH_DRAW_SOCKET);
  socket.off(CASE_EXIT_SOCKET);
  socket.off(DRAW_SOCKET);
  socket.off(SEND_SNAPSHOT_SOCKET);
  socket.off(SET_SNAPSHOT_SOCKET);
};
