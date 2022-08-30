import { useFormik } from "formik";
import { useSocket } from "hooks/useSocket";
import { FC } from "react";
import { Socket } from "socket.io-client";
import { FunctionWithParams } from "types";
import { ActiveRoom } from "types/rooms";
import { Portal } from "utils/portal";
import {
  UpdateModalWrapper,
  UpdateModalForm,
  UpdateModalButtonsWrapper,
} from "./styles";

type Props = {
  socket: Socket<any, any>;
  room: ActiveRoom;
  setEditMode: FunctionWithParams<boolean>;
  userId: string;
};

enum Updatekeys {
  roomName = "roomName",
  isShow = "isShow",
  roomPassword = "roomPassword",
}

export const UpdateCard: FC<Props> = ({ room, setEditMode, userId }) => {
  const { socket } = useSocket();
  const formik = useFormik({
    initialValues: {
      roomName: room.roomName,
      isShow: room.isShow,
      roomPassword: room.roomPassword,
    },
    enableReinitialize: true,
    onSubmit: (data) => {
      const keys = Object.keys(data) as Updatekeys[];
      const res = keys
        .filter((key) => data[key] !== room[key])
        .reduce((acum: any, key) => {
          acum[key] = data[key];
          return acum;
        }, {});

      socket.emit("UPDATE_USER_ROOM", { ...res, roomId: room._id, userId });
      setEditMode(false);
    },
  });

  return (
    <Portal>
      <UpdateModalWrapper>
        <UpdateModalForm onSubmit={formik.handleSubmit}>
          <div>
            <label>Room name</label>
            <input
              type="text"
              name="roomName"
              value={formik.values.roomName}
              onChange={formik.handleChange}
              placeholder="name"
            />

            <label>Room password</label>
            <input
              type="text"
              name="roomPassword"
              value={formik.values.roomPassword}
              onChange={formik.handleChange}
              placeholder="password"
            />

            <label>Show</label>
            <input
              type="checkbox"
              name="isShow"
              checked={!!formik.values.isShow}
              onChange={formik.handleChange}
              title="all users can saw your room"
            />
          </div>
          <UpdateModalButtonsWrapper>
            <button type="submit">save</button>
            <button onClick={() => setEditMode(false)}>cancel</button>
          </UpdateModalButtonsWrapper>
        </UpdateModalForm>
      </UpdateModalWrapper>
    </Portal>
  );
};
