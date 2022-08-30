import { FC } from "react";
import { ActiveRoom } from "types/rooms";
import { UserRoomCard } from "./card";
import { UserCardsWrapper, UserRoomsWrapper } from "./styles";

type Props = {
  userRooms: ActiveRoom[];
  userId: string;
  userName: string;
};

export const UserRooms: FC<Props> = ({ userRooms, userId, userName }) => {
  return (
    <UserRoomsWrapper>
      <h3>Your Rooms</h3>
      <UserCardsWrapper>
        {userRooms.map((room) => (
          <UserRoomCard
            userName={userName}
            key={room._id}
            room={room}
            userId={userId}
          />
        ))}
      </UserCardsWrapper>
    </UserRoomsWrapper>
  );
};
