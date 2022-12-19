import { FC, useMemo } from 'react'

import { ColorCircle } from 'components/color-circle'
import { colors } from 'styles/colors'
import { Heading4, Heading5 } from 'styles/typography/styles'

import { jsonParse } from 'utils/jsonParse'

import { ActiveRoom } from 'types/rooms'

import { ActiveRoomWrapper } from './styles'

type ActiveRoomsProps = {
  activeRooms: ActiveRoom[]
  userId: string
}

export const ActiveRooms: FC<ActiveRoomsProps> = ({ activeRooms, userId }) => {
  const sortedActiveRooms = useMemo(() => {
    const str = JSON.stringify(activeRooms)
    const arr = jsonParse<ActiveRoom[]>(str)

    return arr?.sort((a) => (a.owner === userId ? -1 : 0))
  }, [activeRooms])

  if (!sortedActiveRooms) return <p>no active rooms</p>

  return (
    <>
      {sortedActiveRooms.map((room) => (
        <ActiveRoomWrapper key={room._id} isCurrentUserRoom={room.owner === userId}>
          <ColorCircle color={colors.green} />
          <Heading4>{room.roomName}</Heading4>
          <Heading5>
            {room.users.length} | {room.limit}
          </Heading5>
        </ActiveRoomWrapper>
      ))}
    </>
  )
}
