import { AuthorizedUser } from "types";

export type UserCabinetTypes = Omit<
  AuthorizedUser,
  "id" | "role" | "email" | "avatar" | "backgroundFon" | "biography"
>;
export type InitialStateTypes = {
  name: string;
  country: string;
  city: string;
  age: string;
  color: string;
  gender: string;
  date: string;
};
