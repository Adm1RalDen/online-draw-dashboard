import { SOCKET_HOST_URL } from 'api/const'
import { io } from 'socket.io-client'

export const socket = io(SOCKET_HOST_URL, {
  closeOnBeforeunload: false
})
