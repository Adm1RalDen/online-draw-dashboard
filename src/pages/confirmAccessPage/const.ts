import { toastError } from "services/toast.service";
import { JOIN_ERROR, JOIN_SUCCESS } from "pages/home/const";
import { NavigateFunction } from "react-router-dom";
import { Socket } from "socket.io-client";
import { FunctionWithParams } from "types";

type Props = {
  socket: Socket<any, any>;
  navigate: NavigateFunction;
  setIsLoading: FunctionWithParams<boolean>;
};

export const SetAccessPageConnection = (data: Props) => {
  const { navigate, setIsLoading, socket } = data;

  socket.on(JOIN_SUCCESS, (id: string) => {
    navigate(`/draw_online/${id}`);
    setIsLoading(false);
  });

  socket.on(JOIN_ERROR, (e: string) => {
    setIsLoading(false);
    toastError(e);
  });
};

export const ClearAccessPageConnection = (socket: Socket<any, any>) => {
  socket.off(JOIN_SUCCESS);
  socket.off(JOIN_ERROR);
};
