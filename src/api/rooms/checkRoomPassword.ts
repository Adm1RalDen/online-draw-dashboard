import { Instance } from "../instance";
import { EnterInRoomType } from "./../../pages/home/types";

export const checkRoomPassword = ({ roomId, ...data }: EnterInRoomType) => {
  return Instance.post(`/room/checkRoomPassword/${roomId}`, { ...data });
};
