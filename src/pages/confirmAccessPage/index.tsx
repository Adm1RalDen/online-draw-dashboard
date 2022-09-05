import { JOIN_ROOM_SOCKET } from "const/sockets";
import { HOME_URL } from "const/urls";
import { useSocket } from "hooks/useSocket";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userDataSelector } from "store/selectors/user.selector";
import { useAppSelector } from "store/store";

import { Button } from "components/button/styles";
import { Loader } from "components/loaders/loader";

import { ClearAccessPageConnection, SetAccessPageConnection } from "./const";
import { ConfirmAccessPage, ConfirmAccessPageMain } from "./styles";

export const PrivateRoom = () => {
  const [roomPassword, setPassword] = useState("");
  const user = useAppSelector(userDataSelector);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { roomId } = useParams();
  const { socket } = useSocket();

  useEffect(() => {
    SetAccessPageConnection({ navigate, setIsLoading, socket });
    return () => ClearAccessPageConnection(socket);
  }, []);

  const handleEnter = async () => {
    if (roomId) {
      setIsLoading(true);
      socket.emit(JOIN_ROOM_SOCKET, {
        roomId,
        roomPassword,
        userId: user.id,
        userName: user.name,
      });
    }
  };

  return (
    <ConfirmAccessPage>
      <ConfirmAccessPageMain>
        {isLoading ? (
          <Loader position="absolute" color="white" />
        ) : (
          <>
            <div>
              <p>Please confirm room password</p>
              <input
                type="password"
                placeholder="Room password"
                value={roomPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Button onClick={handleEnter}>enter</Button>
              <Button onClick={() => navigate(HOME_URL)}>back</Button>
            </div>
          </>
        )}
      </ConfirmAccessPageMain>
    </ConfirmAccessPage>
  );
};
