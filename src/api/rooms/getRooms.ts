import { Instance } from "../instance";

export const getAllRooms = async () => {
  return Instance.get("/room/all");
};
