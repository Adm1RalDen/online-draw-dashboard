import { UserReducerInitialTypes } from "./types/user.types";

export const USER_REDUCER = "user";
export const defaultUserData = {
  id: "",
  avatar: "",
  backgroundFon: "",
  name: "",
  age: "",
  role: "",
  email: "",
  country: "",
  city: "",
  color: "",
  gender: "",
  date: "",
  biography: "",
};
export const userInitialState: UserReducerInitialTypes = {
  isAuth: false,
  error: undefined,
  isLoading: false,
  token: undefined,
  data: {
    id: "",
    avatar: "",
    backgroundFon: "",
    name: "",
    age: "",
    role: "",
    email: "",
    country: "",
    city: "",
    color: "",
    gender: "",
    date: "",
    biography: "",
  },
};
