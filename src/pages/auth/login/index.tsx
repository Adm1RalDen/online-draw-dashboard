import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "store";
import { userInfoSelector } from "store/selectors/user.selector";
import { UserLoginFormData } from "types";
import { Portal } from "utils/portal";

import { InputAnimation } from "components/input-animation";
import { Loader } from "components/loaders/loader";

import { AuthButton, Title } from "../styles";
import {
  AuthorizationFileds,
  initialValues,
  onSubmit,
  validationSchema,
} from "./const";

export const LoginComponent = () => {
  const { isLoading } = useAppSelector(userInfoSelector);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data: UserLoginFormData) => onSubmit(data, dispatch),
  });

  return (
    <>
      <div>
        <Title>Login</Title>
        <form onSubmit={formik.handleSubmit}>
          {AuthorizationFileds.map((field) => (
            <InputAnimation
              key={field}
              disabled={isLoading}
              margin="5px 0px 0px 0px"
              label={field[0].toUpperCase() + field.slice(1)}
              name={field}
              type={field}
              value={formik.values[field as keyof UserLoginFormData]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors[field as keyof UserLoginFormData] &&
                formik.touched[field as keyof UserLoginFormData]
                  ? formik.errors[field as keyof UserLoginFormData]
                  : ""
              }
            />
          ))}
          <AuthButton disabled={!formik.isValid || !formik.dirty || isLoading}>
            Send
          </AuthButton>
        </form>
      </div>

      {isLoading && (
        <Portal>
          <Loader color="white" />
        </Portal>
      )}
    </>
  );
};
