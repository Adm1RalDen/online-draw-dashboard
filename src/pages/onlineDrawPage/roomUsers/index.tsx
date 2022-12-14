import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GET_ROOM_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'

import { UserDataInRoom } from 'types/user'

import { RoomUserBlock, RoomUsersBlock } from './styles'

export const RoomUsers = () => {
  const [users, setUsers] = useState<UserDataInRoom[]>([])

  const { roomId = '' } = useParams()

  const socket = useSocket()

  useEffect(() => {
    socket.emit(GET_ROOM_SOCKET, roomId)
    socket.on(GET_ROOM_SOCKET, (data) => {
      setUsers(data.users)
    })
  }, [socket, roomId])

  return (
    <RoomUsersBlock>
      {users.length > 0 &&
        users.map((user) => <RoomUserBlock key={user.userId}>{user.userName}</RoomUserBlock>)}
    </RoomUsersBlock>
  )
}
