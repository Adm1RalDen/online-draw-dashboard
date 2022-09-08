import { FC } from 'react'
import { Heading3 } from 'styles/typography/styles'
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
      <Heading3>Your Rooms</Heading3>
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
