import { CREATE_ROOM_SOCKET, GET_USER_ROOMS_SOCKET } from "const/sockets";
import { Socket } from "socket.io-client";
import { FunctionWithParams } from "types";
import * as yup from "yup";

import { CreateRoom } from "../types";

const initialValues = {
  roomName: "",
  roomPassword: "",
};
const validationSchema = yup.object().shape({
  roomName: yup.string().required("Required"),
});

const onSubmit = async (
  data: CreateRoom,
  setIsLoading: FunctionWithParams<boolean>,
  socket: Socket<any, any>
) => {
  setIsLoading(true);
  socket.emit(CREATE_ROOM_SOCKET, data);
  socket.emit(GET_USER_ROOMS_SOCKET, { userId: data.userId });
};
export { initialValues, validationSchema, onSubmit };
