import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "store/store";
import { UserLoginThunk } from "store/thunks/user/authorization.thunk";
import { UserLoginFormData } from "types";
import { cryptoSha256 } from "utils/cryptoPassord";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup.string().email("Not valid email").required("Required"),
  password: yup.string().min(6, "min 6").required("Required"),
});

export const initialValues: UserLoginFormData = {
  email: "",
  password: "",
};

export const AuthorizationFileds = ["email", "password"];

export const onSubmit = (data: UserLoginFormData, dispatch: AppDispatch) => {
  const password = cryptoSha256(data.password);
  dispatch(UserLoginThunk({ ...data, password }));
};
