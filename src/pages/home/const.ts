import {
  CREATE_ERROR_SOCKET,
  CREATE_SUCCESS_SOCKET,
  DELETE_USER_ROOM_ERROR_SOCKET,
  DELETE_USER_ROOM_SUCCESS_SOCKET,
  GET_ROOMS_SOCKET,
  GET_USER_ROOMS_SOCKET,
  JOIN_ROOM_ERROR_SOCKET,
  JOIN_ROOM_SUCCESS_SOCKET,
  UPDATE_USER_ROOM_ERROR_SOCKET,
  UPDATE_USER_ROOM_SUCCESS_SOCKET,
} from "const/sockets";
import { DRAW_ONLINE_URL } from "const/urls";
import { NavigateFunction } from "react-router-dom";
import { toastError } from "services/toast.service";
import { Socket } from "socket.io-client";
import { FunctionWithParams } from "types";
import { ActiveRoom } from "types/rooms";

type Props = {
  setActiveRooms: FunctionWithParams<ActiveRoom[]>;
  setUserRooms: FunctionWithParams<ActiveRoom[]>;
  navigate: NavigateFunction;
  setIsLoading: FunctionWithParams<boolean>;
  socket: Socket<any, any>;
  userId: string;
};
const accessPermitted = (
  id: string,
  navigate: NavigateFunction,
  setIsLoading: FunctionWithParams<boolean>
) => {
  setIsLoading(false);
  navigate(`${DRAW_ONLINE_URL}/${id}`);
};
const accessUnPermitted = (
  error: string,
  setIsLoading: FunctionWithParams<boolean>
) => {
  setIsLoading(false);
  toastError(error);
};

export const SetRoomsConnection = (data: Props) => {
  const {
    socket,
    setActiveRooms,
    navigate,
    setUserRooms,
    userId,
    setIsLoading,
  } = data;
  socket.emit(GET_ROOMS_SOCKET);
  socket.emit(GET_USER_ROOMS_SOCKET, { userId });

  socket.on(GET_ROOMS_SOCKET, (data: ActiveRoom[]) => setActiveRooms(data));

  socket.on(CREATE_SUCCESS_SOCKET, (id: string) =>
    accessPermitted(id, navigate, setIsLoading)
  );
  socket.on(CREATE_ERROR_SOCKET, (e: string) =>
    accessUnPermitted(e, setIsLoading)
  );
  socket.on(JOIN_ROOM_SUCCESS_SOCKET, (id: string) => {
    accessPermitted(id, navigate, setIsLoading);
  });
  socket.on(JOIN_ROOM_ERROR_SOCKET, (e: string) => {
    accessUnPermitted(e, setIsLoading);
  });
  socket.on(GET_USER_ROOMS_SOCKET, (data: ActiveRoom[]) => setUserRooms(data));

  socket.on(DELETE_USER_ROOM_ERROR_SOCKET, (error: string) => {
    setIsLoading(false);
    toastError(error);
  });
  socket.on(DELETE_USER_ROOM_SUCCESS_SOCKET, () => {
    setIsLoading(false);
  });
  socket.on(UPDATE_USER_ROOM_SUCCESS_SOCKET, () => {
    setIsLoading(false);
  });
  socket.on(UPDATE_USER_ROOM_ERROR_SOCKET, (error: string) => {
    toastError(error);
    setIsLoading(false);
  });
};

export const ClearRoomsConnection = (socket: Socket<any, any>) => {
  socket.off(GET_ROOMS_SOCKET);
  socket.off(CREATE_SUCCESS_SOCKET);
  socket.off(CREATE_ERROR_SOCKET);
  socket.off(JOIN_ROOM_SUCCESS_SOCKET);
  socket.off(JOIN_ROOM_ERROR_SOCKET);
  socket.off(GET_USER_ROOMS_SOCKET);
  socket.off(DELETE_USER_ROOM_ERROR_SOCKET);
  socket.off(DELETE_USER_ROOM_SUCCESS_SOCKET);
  socket.off(UPDATE_USER_ROOM_SUCCESS_SOCKET);
  socket.off(UPDATE_USER_ROOM_ERROR_SOCKET);
};
