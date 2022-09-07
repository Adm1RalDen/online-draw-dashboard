import { useFormik } from "formik";
import { useSocket } from "hooks/useSocket";
import { FC } from "react";
import { FunctionWithParams } from "types";
import { ActiveRoom } from "types/rooms";
import { Portal } from "utils/portal";

import { Button } from "components/button";

import { onSubmit } from "./const";
import {
  UpdateModalButtonsWrapper,
  UpdateModalCheckbox,
  UpdateModalForm,
  UpdateModalInput,
  UpdateModalWrapper,
} from "./styles";

type Props = {
  room: ActiveRoom;
  userId: string;
  setEditMode: FunctionWithParams<boolean>;
  setIsLoading: FunctionWithParams<boolean>;
};

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
    onSubmit: (data) =>
      onSubmit({ data, socket, setIsLoading, room, userId, setEditMode }),
  });
  const changeEditMode = () => setEditMode(false);

  return (
    <Portal>
      <UpdateModalWrapper>
        <UpdateModalForm onSubmit={formik.handleSubmit}>
          <div>
            <label>Room name</label>
            <UpdateModalInput
              type="text"
              name="roomName"
              value={formik.values.roomName}
              onChange={formik.handleChange}
              placeholder="name"
            />

            <label>Room password</label>
            <UpdateModalInput
              type="text"
              name="roomPassword"
              value={formik.values.roomPassword}
              onChange={formik.handleChange}
              placeholder="password"
            />

            <label>Show</label>
            <UpdateModalCheckbox
              type="checkbox"
              name="isShow"
              checked={formik.values.isShow}
              onChange={formik.handleChange}
              title="all users can saw your room"
            />
          </div>
          <UpdateModalButtonsWrapper>
            <Button type="submit">save</Button>
            <Button onClick={changeEditMode}>cancel</Button>
          </UpdateModalButtonsWrapper>
        </UpdateModalForm>
      </UpdateModalWrapper>
    </Portal>
  );
};
