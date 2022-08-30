import { Instance } from "api/instance";

export const checkRoom = (id: string, userId: string) => {
  return Instance.post(
    `/room/check/${id}`,
    { userId },
    { withCredentials: true }
  );
};
