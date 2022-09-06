import { GET_ROOM_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { UserInRoom } from 'types'

const RoomUsersBlock = styled.div`
  grid-area: roomUsers;
  padding: 5px;
  background-color: #fff;
`

const RoomUserBlock = styled.div`
  padding: 10px;
  border: 2px solid gray;
`

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
