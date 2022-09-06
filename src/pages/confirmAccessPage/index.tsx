import { JOIN_ROOM_SOCKET } from "const/sockets";
import { HOME_URL } from "const/urls";
import { useSocket } from "hooks/useSocket";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userDataSelector } from "store/selectors/user.selector";
import { useAppSelector } from "store/store";

import { Input } from "components/input";
import { Loader } from "components/loaders/loader";

import { ClearAccessPageConnection, SetAccessPageConnection } from "./const";
import {
  ConfirmAccessPage,
  ConfirmAccessPageButton,
  ConfirmAccessPageButtonsWrapper,
  ConfirmAccessPageInputWrapper,
  ConfirmAccessPageMain,
} from "./styles";

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
  const handleHomeNavigate = () => navigate(HOME_URL);
  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  return (
    <ConfirmAccessPage>
      <ConfirmAccessPageMain>
        {isLoading ? (
          <Loader position="absolute" color="white" />
        ) : (
          <>
            <ConfirmAccessPageInputWrapper>
              <p>Please confirm room password</p>
              <Input
                type="password"
                placeholder="Room password"
                value={roomPassword}
                onChange={handleSetPassword}
              />
            </ConfirmAccessPageInputWrapper>
            <ConfirmAccessPageButtonsWrapper>
              <ConfirmAccessPageButton onClick={handleEnter}>
                Enter
              </ConfirmAccessPageButton>
              <ConfirmAccessPageButton onClick={handleHomeNavigate}>
                Back
              </ConfirmAccessPageButton>
            </ConfirmAccessPageButtonsWrapper>
          </>
        )}
      </ConfirmAccessPageMain>
    </ConfirmAccessPage>
  );
};
