import { Instance } from "api/instance";

export const logout = async () => {
  return Instance.delete("/user/logout", { withCredentials: true });
};
