import { Socket } from "socket.io-client";
import { FunctionWithParams } from "types";
import * as yup from "yup";

import { JOIN_ROOM } from "../const";
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
  socket.emit(JOIN_ROOM, data);
};

export { initialValues, onSubmit, validationSchema };
