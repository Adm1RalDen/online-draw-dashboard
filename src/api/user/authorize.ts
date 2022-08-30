import { Instance } from "api/instance";
import { SavedUserObject, UserLoginFormData } from "types";

export const authorizeUser = async (data: UserLoginFormData) => {
  return Instance.post<SavedUserObject>("/user/login", data, {
    withCredentials: true,
  });
};
