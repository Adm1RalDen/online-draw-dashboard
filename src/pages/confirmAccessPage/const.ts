import { JOIN_ERROR_SOCKET, JOIN_SUCCESS_SOCKET } from "const/sockets";
import { DRAW_ONLINE_URL } from "const/urls";
import { NavigateFunction } from "react-router-dom";
import { toastError } from "services/toast.service";
import { Socket } from "socket.io-client";
import { FunctionWithParams } from "types";

type Props = {
  socket: Socket<any, any>;
  navigate: NavigateFunction;
  setIsLoading: FunctionWithParams<boolean>;
};

export const SetAccessPageConnection = (data: Props) => {
  const { navigate, setIsLoading, socket } = data;

  socket.on(JOIN_SUCCESS_SOCKET, (id: string) => {
    navigate(`${DRAW_ONLINE_URL}/${id}`);
    setIsLoading(false);
  });

  socket.on(JOIN_ERROR_SOCKET, (e: string) => {
    setIsLoading(false);
    toastError(e);
  });
};

export const ClearAccessPageConnection = (socket: Socket<any, any>) => {
  socket.off(JOIN_SUCCESS_SOCKET);
  socket.off(JOIN_ERROR_SOCKET);
};
