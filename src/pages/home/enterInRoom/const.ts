import { JOIN_ROOM_SOCKET } from "const/sockets";
import { Socket } from "socket.io-client";
import { FunctionWithParams } from "types";
import * as yup from "yup";

import { EnterInRoomType } from "../types";

const initialValues = {
  roomId: "",
  roomPassword: "",
};
const validationSchema = yup.object().shape({
  roomId: yup.string().required("Required"),
});

const onSubmit = async (
  data: EnterInRoomType,
  socket: Socket<any, any>,
  setIsLoading: FunctionWithParams<boolean>
) => {
  setIsLoading(true);
  socket.emit(JOIN_ROOM_SOCKET, data);
};

export { initialValues, onSubmit, validationSchema };
