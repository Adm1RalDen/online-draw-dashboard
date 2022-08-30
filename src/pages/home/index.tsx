import { Button } from "components/button/styles";
import { Loader } from "components/loaders/loader";
import { useSocket } from "hooks/useSocket";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDataSelector } from "store/selectors/user.selector";
import { useAppDispatch, useAppSelector } from "store/store";
import { UserLogoutThunk } from "store/thunks/user/authorization.thunk";
import { ActiveRoom } from "types/rooms";
import { ActiveRooms } from "./activeRooms";
import { Chat } from "./chat";
import { ClearRoomsConnection, SetRoomsConnection } from "./const";
import { CreateRoomComponent } from "./createRoom";
import { EnterInRoomComponent } from "./enterInRoom";
import { HomeCabinet } from "./homeCabinet";
import {
  HomePageSection,
  HomePageWrapper,
  ActiveRoomsWrapper,
  ChatWrapper,
  Wrapper,
  HomeHeader,
} from "./styles";
import { UserRooms } from "./userRooms";

export const HomePage = () => {
  const { id, name } = useAppSelector(userDataSelector);
  const [loading, setIsLoading] = useState(false);
  const [activeRooms, setActiveRooms] = useState<ActiveRoom[]>([]);
  const [userRooms, setUserRooms] = useState<ActiveRoom[]>([]);

  const dispatch = useAppDispatch();
  const { socket } = useSocket();
  const navigate = useNavigate();

  useEffect(() => {
    SetRoomsConnection({
      navigate,
      setActiveRooms,
      socket,
      setUserRooms,
      userId: id,
    });
    return () => ClearRoomsConnection(socket);
  }, []);

  if (loading) return <Loader position="absolute" />;

  return (
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
            isLoading={loading}
            setIsLoading={setIsLoading}
          />
          <EnterInRoomComponent />
        </Wrapper>

        <UserRooms userRooms={userRooms} userId={id} userName={name} />

        <ChatWrapper>
          <h3>Chat</h3>
          <Chat />
        </ChatWrapper>
      </HomePageWrapper>
    </HomePageSection>
  );
};
