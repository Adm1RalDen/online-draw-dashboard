import { EnterInRoomType } from "./../../pages/home/types";
import { Instance } from "../instance";

export const checkRoomPassword = ({ roomId, ...data }: EnterInRoomType) => {
  return Instance.post(`/room/checkRoomPassword/${roomId}`, { ...data });
};
