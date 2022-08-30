import { UserRegistrationData } from "types";
import { cryptoSha256 } from "utils/cryptoPassord";
import * as yup from "yup";
import { AppDispatch } from "store/store";
import { UserRegistrationThunk } from "store/thunks/user/authorization.thunk";

export const validationSchema = yup.object().shape({
  name: yup.string().min(2, "min 2 symbols").required("Required"),
  email: yup.string().email("Not valid email").required("Required"),
  password: yup.string().min(6, "min 6").required("Required"),
});

export const initialValues: UserRegistrationData = {
  name: "",
  email: "",
  password: "",
};

export const RegistrationFileds = ["name", "email", "password"];

export const SetTypesFields = (name: string) => {
  switch (name) {
    case "email":
      return "email";
    case "password":
      return "password";
    default:
      return "text";
  }
};

export const onSubmit = async (
  data: UserRegistrationData,
  dispatch: AppDispatch
) => {
  const password = cryptoSha256(data.password);
  await dispatch(UserRegistrationThunk({ ...data, password }));
};
