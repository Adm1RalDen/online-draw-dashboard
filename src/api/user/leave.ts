import { API } from "api/const";
import { Instance } from "api/instance";

export const handleLeave = async (userId: string, roomId: string) => {
  await Instance.put(`${API}/room/leave`, { userId, roomId });
};
