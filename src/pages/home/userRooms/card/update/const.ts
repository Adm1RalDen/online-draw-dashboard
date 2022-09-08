import { UPDATE_USER_ROOM_SOCKET } from 'const/sockets'
import { Socket } from 'socket.io-client'
import { FunctionWithParams } from 'types'
import { ActiveRoom } from 'types/rooms'

type Props = {
  data: {
    roomName: string
    isShow: boolean
    roomPassword: string
  }
  socket: Socket<any, any>
  setIsLoading: FunctionWithParams<boolean>
  room: ActiveRoom
  userId: string
  setEditMode: FunctionWithParams<boolean>
}

export const onSubmit = ({ data, socket, setIsLoading, room, userId, setEditMode }: Props) => {
  setIsLoading(true)
  const keys = Object.keys(data) as (keyof Props['data'])[]
  const res = keys
    .filter((key) => data[key] !== room[key])
    .reduce((acum: any, key: keyof Props['data']) => {
      acum[key] = data[key]
      return acum
    }, {} as Props['data'])

  socket.emit(UPDATE_USER_ROOM_SOCKET, {
    ...res,
    roomId: room._id,
    userId
  })
  setEditMode(false)
}
