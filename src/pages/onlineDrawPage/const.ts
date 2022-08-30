import { checkRoom } from "api/rooms/checkRoom";
import { NavigateFunction } from "react-router-dom";
import { Socket } from "socket.io-client";
import { FunctionWithParams } from "types";

type Props = {
  setIsLoading: FunctionWithParams<boolean>;
  setAccess: FunctionWithParams<boolean>;
  roomId: string | undefined;
  userId: string;
  navigate: NavigateFunction;
  socket: Socket<any, any>;
};

export const checkUserInRoom = async (data: Props) => {
  const { navigate, roomId, setIsLoading, userId, setAccess, socket } = data;

  if (!roomId) {
    navigate("/not-found");
    return false;
  }

  setIsLoading(true);

  try {
    const response = await checkRoom(roomId, userId);

    if (response.status === 200) {
      setAccess(true);
      socket.emit("JOIN_ACCESS", { roomId });
    }
    setIsLoading(false);
    return true;
  } catch (e) {
    navigate(`/checkRoompassword/${roomId}`);
  }
};
