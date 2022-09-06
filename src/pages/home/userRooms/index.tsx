import { FC } from 'react'
import { ActiveRoom } from 'types/rooms'

import { UserRoomCard } from './card'
import { UserCardsWrapper, UserRoomsWrapper } from './styles'

type Props = {
  userRooms: ActiveRoom[]
  userId: string
  userName: string
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserRooms: FC<Props> = ({ userRooms, userId, userName, isLoading, setIsLoading }) => {
  return (
    <UserRoomsWrapper>
      <h3>Your Rooms</h3>
      <UserCardsWrapper>
        {userRooms.map((room) => (
          <UserRoomCard
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            userName={userName}
            key={room._id}
            room={room}
            userId={userId}
          />
        ))}
      </UserCardsWrapper>
    </UserRoomsWrapper>
  )
}
