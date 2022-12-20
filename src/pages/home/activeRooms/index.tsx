import { useMemo } from 'react'

import { ColorCircle } from 'components/color-circle'
import { colors } from 'styles/colors'
import { Heading4, Heading5, Paragraph } from 'styles/typography/styles'

import { jsonParse } from 'utils/jsonParse'

import { ActiveRoom } from 'types/rooms'

import { ActiveRoomWrapper } from './styles'

type ActiveRoomsProps = {
  activeRooms: ActiveRoom[]
  userId: string
}

export const ActiveRooms = ({ activeRooms, userId }: ActiveRoomsProps) => {
  const sortedActiveRooms = useMemo(() => {
    const arrCopied = jsonParse<ActiveRoom[]>(JSON.stringify(activeRooms))

    return arrCopied?.sort((a) => (a.owner === userId ? -1 : 0))
  }, [activeRooms])

  if (!sortedActiveRooms?.length) return <Paragraph color={colors.white}>no active rooms</Paragraph>

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
