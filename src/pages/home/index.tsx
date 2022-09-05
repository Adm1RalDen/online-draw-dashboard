import { useSocket } from "hooks/useSocket";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDataSelector } from "store/selectors/user.selector";
import { useAppDispatch, useAppSelector } from "store/store";
import { UserLogoutThunk } from "store/thunks/user/authorization.thunk";
import { ActiveRoom } from "types/rooms";
import { Portal } from "utils/portal";

import { Button } from "components/button/styles";
import { Loader } from "components/loaders/loader";

import { ActiveRooms } from "./activeRooms";
import { Chat } from "./chat";
import { ClearRoomsConnection, SetRoomsConnection } from "./const";
import { CreateRoomComponent } from "./createRoom";
import { EnterInRoomComponent } from "./enterInRoom";
import { HomeCabinet } from "./homeCabinet";
import {
  ActiveRoomsWrapper,
  ChatWrapper,
  HomeHeader,
  HomePageSection,
  HomePageWrapper,
  Wrapper,
} from "./styles";
import { UserRooms } from "./userRooms";

export const HomePage = () => {
  const { id, name } = useAppSelector(userDataSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [activeRooms, setActiveRooms] = useState<ActiveRoom[]>([]);
  const [userRooms, setUserRooms] = useState<ActiveRoom[]>([]);
  const dispatch = useAppDispatch();
  const { socket } = useSocket();
  const navigate = useNavigate();

  useEffect(() => {
    SetRoomsConnection({
      navigate,
      setActiveRooms,
      setIsLoading,
      setUserRooms,
      socket,
      userId: id,
    });
    return () => ClearRoomsConnection(socket);
  }, []);

  return (
    <>
      <HomePageSection>
        <HomePageWrapper>
          <HomeHeader>
            <HomeCabinet />
            <Button onClick={() => UserLogoutThunk(dispatch)}>logout</Button>
          </HomeHeader>

          <ActiveRoomsWrapper>
            <h3>Active rooms</h3>
            <ActiveRooms activeRooms={activeRooms} userId={id} />
          </ActiveRoomsWrapper>

          <Wrapper>
            <CreateRoomComponent
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <EnterInRoomComponent
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </Wrapper>

          <UserRooms
            userRooms={userRooms}
            userId={id}
            userName={name}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />

          <ChatWrapper>
            <h3>Chat</h3>
            <Chat />
          </ChatWrapper>
        </HomePageWrapper>
      </HomePageSection>

      {isLoading && (
        <Portal>
          <Loader color="white" />
        </Portal>
      )}
    </>
  );
};