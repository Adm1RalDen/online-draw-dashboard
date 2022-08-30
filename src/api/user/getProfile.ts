import { SetHeaders } from "api/const";
import { Instance } from "api/instance";
import { AuthorizedUser } from "types";

export const getProfile = async (id: string) => {
  return Instance.get<AuthorizedUser>(`/user/${id}`, SetHeaders());
};
