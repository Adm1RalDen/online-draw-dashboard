/* eslint-disable @typescript-eslint/no-explicit-any */
import { UPDATE_USER_ROOM_SOCKET } from 'const/sockets'

import { HandleUpdateParams } from './types'

interface AcumTypes {
  [key: string]: string | boolean
}

export const handleUpdateCard = ({ room, userId, data, socket }: HandleUpdateParams) => {
  const keys = Object.keys(data) as (keyof HandleUpdateParams['data'])[]

  const res = keys
    .filter((key) => data[key] !== room[key])
    .reduce((acum: AcumTypes, key) => {
      acum[key] = data[key]
      return acum
    }, {})

  socket.emit(UPDATE_USER_ROOM_SOCKET, {
    ...res,
    roomId: room._id,
    userId
  })
}
