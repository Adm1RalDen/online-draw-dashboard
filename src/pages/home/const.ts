import { NavigateFunction } from "react-router-dom";
import { toastError } from "services/toast.service";
import { Socket } from "socket.io-client";
import { FunctionWithParams } from "types";
import { ActiveRoom } from "types/rooms";

export const CREATE_ROOM = "CREATE";
export const GET_ROOM = "GET_ROOM";
export const GET_ROOMS = "GET_ROOMS";
export const CREATE_ERROR = "CREATE_ERROR";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const JOIN_ROOM = "JOIN";
export const JOIN_SUCCESS = "JOIN_SUCCESS";
export const JOIN_ERROR = "JOIN_ERROR";
export const CASE_EXIT = "CASE_EXIT";
export const GET_USER_ROOMS = "GET_USER_ROOMS";
export const DELETE_USER_ROOM_ERROR = "ERROR_DELETE_USER_ROOM";
const DRAW_URL = "/draw_online";

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
  navigate(`${DRAW_URL}/${id}`);
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

  socket.emit(GET_ROOMS);
  socket.emit(GET_USER_ROOMS, { userId });
  socket.on(GET_ROOMS, (data: ActiveRoom[]) => setActiveRooms(data));
  socket.on(CREATE_SUCCESS, (id: string) =>
    accessPermitted(id, navigate, setIsLoading)
  );
  socket.on(CREATE_ERROR, (e: string) => accessUnPermitted(e, setIsLoading));
  socket.on(JOIN_SUCCESS, (id: string) =>
    accessPermitted(id, navigate, setIsLoading)
  );
  socket.on(JOIN_ERROR, (e: string) => accessUnPermitted(e, setIsLoading));
  socket.on(GET_USER_ROOMS, (data: ActiveRoom[]) => setUserRooms(data));
  socket.on(DELETE_USER_ROOM_ERROR, (error: string) => toastError(error));
};

export const ClearRoomsConnection = (socket: Socket<any, any>) => {
  socket.off(GET_ROOMS);
  socket.off(CREATE_SUCCESS);
  socket.off(CREATE_ERROR);
  socket.off(JOIN_SUCCESS);
  socket.off(JOIN_ERROR);
  socket.off(GET_USER_ROOMS);
  socket.off(DELETE_USER_ROOM_ERROR);
};
