import { io } from 'socket.io-client'

import { SOCKET_HOST_URL } from 'api/const'

export const socket = io(SOCKET_HOST_URL, {
  closeOnBeforeunload: false
})
