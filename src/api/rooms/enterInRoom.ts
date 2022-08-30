import { Instance } from "../instance";

export const enterInRoom = async (data: any) => {
  return Instance.post("/room/enter", data, { withCredentials: true });
};
