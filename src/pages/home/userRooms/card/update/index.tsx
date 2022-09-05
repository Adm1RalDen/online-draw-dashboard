import { UPDATE_USER_ROOM_SOCKET } from "const/sockets";
import { useFormik } from "formik";
import { useSocket } from "hooks/useSocket";
import { FC } from "react";
import { FunctionWithParams } from "types";
import { ActiveRoom } from "types/rooms";
import { Portal } from "utils/portal";

import { Button } from "components/button/styles";

import {
  UpdateModalButtonsWrapper,
  UpdateModalForm,
  UpdateModalWrapper,
} from "./styles";

type Props = {
  room: ActiveRoom;
  userId: string;
  setEditMode: FunctionWithParams<boolean>;
  setIsLoading: FunctionWithParams<boolean>;
};

enum Updatekeys {
  roomName = "roomName",
  isShow = "isShow",
  roomPassword = "roomPassword",
}

export const UpdateCard: FC<Props> = ({
  room,
  setEditMode,
  userId,
  setIsLoading,
}) => {
  const { socket } = useSocket();
  const formik = useFormik({
    initialValues: {
      roomName: room.roomName,
      isShow: room.isShow,
      roomPassword: room.roomPassword,
    },
    enableReinitialize: true,
    onSubmit: (data) => {
      setIsLoading(true);
      const keys = Object.keys(data) as Updatekeys[];
      const res = keys
        .filter((key) => data[key] !== room[key])
        .reduce((acum: any, key) => {
          acum[key] = data[key];
          return acum;
        }, {});

      socket.emit(UPDATE_USER_ROOM_SOCKET, {
        ...res,
        roomId: room._id,
        userId,
      });
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
            <Button type="submit">save</Button>
            <Button onClick={() => setEditMode(false)}>cancel</Button>
          </UpdateModalButtonsWrapper>
        </UpdateModalForm>
      </UpdateModalWrapper>
    </Portal>
  );
};
