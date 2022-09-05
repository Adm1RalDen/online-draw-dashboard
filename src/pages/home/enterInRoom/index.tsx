import { useFormik } from "formik";
import { useSocket } from "hooks/useSocket";
import { FC } from "react";
import { userInfoSelector } from "store/selectors/user.selector";
import { useAppSelector } from "store/store";
import { FunctionWithParams } from "types";

import { ErrorOutput } from "components/errorOutput";
import { Form } from "components/form/styles";

import { RoomInput, RoomWrapper, SubmitButton } from "../styles";
import { initialValues, onSubmit, validationSchema } from "./const";

type Props = {
  isLoading: boolean;
  setIsLoading: FunctionWithParams<boolean>;
};

export const EnterInRoomComponent: FC<Props> = ({
  isLoading,
  setIsLoading,
}) => {
  const { socket } = useSocket();
  const user = useAppSelector(userInfoSelector);
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
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <RoomInput
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
          <RoomInput
            type="password"
            name="roomPassword"
            placeholder="Room password"
            value={formik.values.roomPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isLoading}
          />
        </div>
        <SubmitButton type="submit" disabled={isLoading || !formik.dirty}>
          Enter in room
        </SubmitButton>
      </Form>
    </RoomWrapper>
  );
};
