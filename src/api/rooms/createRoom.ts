import { CreateRoom } from "../../pages/home/types";
import { Instance } from "../instance";

export const createRoom = async (data: CreateRoom) => {
  return Instance.post("/room/create", data, { withCredentials: true });
};
