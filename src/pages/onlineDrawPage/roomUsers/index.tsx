import { GET_ROOM_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserInRoom } from 'types'

import { RoomUserBlock, RoomUsersBlock } from './styles'

export const RoomUsers = () => {
  const { socket } = useSocket()
  const { roomId } = useParams()
  const [users, setUsers] = useState<UserInRoom[]>([])

  useEffect(() => {
    socket.emit(GET_ROOM_SOCKET, roomId)
    socket.on(GET_ROOM_SOCKET, (data: any) => {
      setUsers(data.users)
    })
  }, [])

  return (
    <RoomUsersBlock>
      {users.length &&
        users.map((user) => <RoomUserBlock key={user.userId}>{user.userName}</RoomUserBlock>)}
    </RoomUsersBlock>
  )
}
