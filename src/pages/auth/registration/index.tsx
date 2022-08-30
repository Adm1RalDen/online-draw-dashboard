import { useFormik } from "formik";
import { userInfoSelector } from "store/selectors/user.selector";
import { useAppDispatch, useAppSelector } from "store/store";
import { UserRegistrationData } from "types";
import { Portal } from "utils/portal";

import { Button } from "components/button/styles";
import { Input } from "components/input";
import { Loader } from "components/loaders/loader";

import { Form, FormWrapper, Title } from "../styles";
import {
  RegistrationFileds,
  SetTypesFields,
  initialValues,
  onSubmit,
  validationSchema,
} from "./const";

export const RegistrationComponent = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(userInfoSelector);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data: UserRegistrationData) => onSubmit(data, dispatch),
  });

  return (
    <>
      <FormWrapper>
        <Title>Registration</Title>
        <Form onSubmit={formik.handleSubmit}>
          {RegistrationFileds.map((field) => (
            <Input
              key={field}
              margin="5px 0px 0px 0px"
              label={field[0].toUpperCase() + field.slice(1)}
              name={field}
              type={SetTypesFields(field)}
              value={formik.values[field as keyof UserRegistrationData]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors[field as keyof UserRegistrationData] &&
                formik.touched[field as keyof UserRegistrationData]
                  ? formik.errors[field as keyof UserRegistrationData]
                  : ""
              }
            />
          ))}
          <Button
            type="submit"
            width="100%"
            margin="10px 0px 0px 0px"
            color="#fff"
            disabled={!formik.isValid || !formik.dirty}
          >
            Send
          </Button>
        </Form>
      </FormWrapper>
      {isLoading && (
        <Portal>
          <Loader color="white" />
        </Portal>
      )}
    </>
  );
};
