/* eslint-disable @typescript-eslint/no-explicit-any */
import { UPDATE_USER_ROOM_SOCKET } from 'const/sockets'

import { HandleUpdateParams } from './types'

export const handleUpdate = (params: HandleUpdateParams) => {
  const { room, userId, data, socket, setIsLoading, setEditMode } = params

  setIsLoading(true)

  const keys = Object.keys(data) as (keyof HandleUpdateParams['data'])[]
  const res = keys
    .filter((key) => data[key] !== room[key])
    .reduce((acum: any, key: keyof HandleUpdateParams['data']) => {
      acum[key] = data[key]
      return acum
    }, {} as HandleUpdateParams['data'])

  socket.emit(UPDATE_USER_ROOM_SOCKET, {
    ...res,
    roomId: room._id,
    userId
  })

  setEditMode(false)
}
