import { useSocket } from "hooks/useSocket";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userDataSelector } from "store/selectors/user.selector";
import { useAppSelector } from "store/store";

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
      socket.emit("JOIN", {
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
              <button onClick={handleEnter}>enter</button>
              <button onClick={() => navigate("/")}>back</button>
            </div>
          </>
        )}
      </ConfirmAccessPageMain>
    </ConfirmAccessPage>
  );
};
