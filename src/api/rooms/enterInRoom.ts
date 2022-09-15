import { EnterInRoomType } from 'pages/home/types'

import { Instance } from '../instance'

export const enterInRoom = async (data: EnterInRoomType) => {
  return Instance.post('/room/enter', data)
}
