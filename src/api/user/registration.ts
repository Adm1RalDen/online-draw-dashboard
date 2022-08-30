import { Instance } from "api/instance";
import { UserRegistrationData } from "types";

export const registrationUser = async (data: UserRegistrationData) => {
  return Instance.post("/user/registration", data);
};
