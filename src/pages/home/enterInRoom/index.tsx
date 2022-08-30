import { useFormik } from "formik";
import { RoomWrapper } from "../styles";
import { initialValues, onSubmit, validationSchema } from "./const";
import { useState } from "react";
import { useAppSelector } from "store/store";
import { LittleLoader } from "components/loaders/littleLoader";
import { ErrorOutput } from "components/errorOutput";
import { useSocket } from "hooks/useSocket";
import { userInfoSelector } from "store/selectors/user.selector";

export const EnterInRoomComponent = () => {
  const { socket } = useSocket();
  const user = useAppSelector(userInfoSelector);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data) =>
      onSubmit(
        { ...data, userId: user.data.id, userName: user.data.name },
        socket,
        setIsLoading
      ),
  });

  return (
    <RoomWrapper>
      <h3>Join to room</h3>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="roomId"
            placeholder="Room id"
            value={formik.values.roomId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isLoading}
          />
          {formik.errors.roomId && formik.touched.roomId && (
            <ErrorOutput>{formik.errors.roomId}</ErrorOutput>
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
            disabled={isLoading}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          Enter in room
        </button>
        {isLoading && <LittleLoader />}
      </form>
    </RoomWrapper>
  );
};
