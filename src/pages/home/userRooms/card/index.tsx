import { DELETE_USER_ROOM_SOCKET, JOIN_ROOM_SOCKET } from "const/sockets";
import { useSocket } from "hooks/useSocket";
import { FC, useState } from "react";
import { ActiveRoom } from "types/rooms";

import { CardSettings, CardSettingsButton, RoomCard } from "./styles";
import { UpdateCard } from "./update";

type Props = {
  room: ActiveRoom;
  userId: string;
  userName: string;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserRoomCard: FC<Props> = ({
  room,
  userId,
  userName,
  isLoading,
  setIsLoading,
}) => {
  const [active, setActive] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { socket } = useSocket();

  const handleEditMode = () => setEditMode((prev) => !prev);
  const handleActiveMode = () => setActive((prev) => !prev);
  const handleDeleteRoom = () => {
    setIsLoading(true);
    socket.emit(DELETE_USER_ROOM_SOCKET, {
      userId,
      roomId: room._id,
      roomPassword: room.roomPassword,
    });
  };

  const handleJoinRoom = () => {
    setIsLoading(true);
    socket.emit(JOIN_ROOM_SOCKET, {
      userId,
      userName,
      roomId: room._id,
      roomPassword: room.roomPassword,
    });
  };

  return (
    <RoomCard active={active}>
      <h4>id {room._id}</h4>
      <p>
        name: {room.roomName}
        <br />
        show: {String(room.isShow)}
        <br />
        limit: {room.limit}
        <br />
        status: {String(room.status)}
      </p>
      {active && (
        <CardSettings>
          <li>
            <CardSettingsButton disabled={isLoading} onClick={handleEditMode}>
              edit
            </CardSettingsButton>
          </li>
          <li>
            <CardSettingsButton disabled={isLoading} onClick={handleDeleteRoom}>
              delete
            </CardSettingsButton>
          </li>
          <li>
            <CardSettingsButton disabled={isLoading} onClick={handleJoinRoom}>
              join
            </CardSettingsButton>
          </li>
        </CardSettings>
      )}
      <span onClick={handleActiveMode}>
        {!active ? (
          <img src="/assets/dots.png" alt="edit" width={30} height={30} />
        ) : (
          <img src="/assets/close.png" alt="close" width={25} height={25} />
        )}
      </span>

      {editMode && (
        <UpdateCard
          room={room}
          userId={userId}
          setEditMode={setEditMode}
          setIsLoading={setIsLoading}
        />
      )}
    </RoomCard>
  );
};
