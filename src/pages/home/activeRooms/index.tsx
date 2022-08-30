import { FC } from "react";
import { ActiveRoom } from "types/rooms";
import { Room } from "./styles";

type ActiveRoomsProps = {
  activeRooms: ActiveRoom[];
  userId: string;
};

export const ActiveRooms: FC<ActiveRoomsProps> = ({ activeRooms, userId }) => {
  return (
    <>
      {activeRooms.length ? (
        activeRooms.map((room) => (
          <Room key={room._id}>
            <div /> {room.roomName} {room.users.length} / {room.limit}{" "}
            {room.owner === userId && "(your)"}
          </Room>
        ))
      ) : (
        <p>no active rooms</p>
      )}
    </>
  );
};
