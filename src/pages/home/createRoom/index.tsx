import { useFormik } from "formik";
import { useSocket } from "hooks/useSocket";
import { FC } from "react";
import { userDataSelector } from "store/selectors/user.selector";
import { useAppSelector } from "store/store";
import { FunctionWithParams } from "types";

import { ErrorOutput } from "components/errorOutput";

import { Loader } from "../../../components/loaders/loader";
import { RoomWrapper } from "../styles";
import { initialValues, onSubmit, validationSchema } from "./const";

type ComponentProps = {
  isLoading: boolean;
  setIsLoading: FunctionWithParams<boolean>;
};

export const CreateRoomComponent: FC<ComponentProps> = ({
  isLoading,
  setIsLoading,
}) => {
  const user = useAppSelector(userDataSelector);
  const { socket } = useSocket();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data) =>
      onSubmit(
        { ...data, userId: user.id, userName: user.name },
        setIsLoading,
        socket
      ),
  });

  if (isLoading) return <Loader position="absolute" />;
  return (
    <RoomWrapper>
      <h3>Create room</h3>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="roomName"
            placeholder="Room name"
            value={formik.values.roomName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.roomName && formik.touched.roomName && (
            <ErrorOutput>{formik.errors.roomName}</ErrorOutput>
          )}
        </div>
        <div>
          <input
            type="password"
            name="roomPassword"
            placeholder="Room password"
            value={formik.values.roomPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button type="submit">Create room</button>
      </form>
    </RoomWrapper>
  );
};
