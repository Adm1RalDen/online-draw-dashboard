import { HOST } from 'api/const'
import { CHAT_ERROR_SOCKET, CHAT_MESSAGE_SOCKET, GET_CHAT_SOCKET } from 'const/sockets'
import { FunctionWithParams } from 'types'
import { SocketApp } from 'types/socket'

import { ChatMessage } from '../types'

type Props = {
  socket: SocketApp
  setIsLoading: FunctionWithParams<boolean>
  setMessages: React.Dispatch<React.SetStateAction<[] | ChatMessage[]>>
  setMessageLoading: FunctionWithParams<boolean>
  setError: FunctionWithParams<string>
  id: string
}

// !!! when will fix problem static folder delete ALTERNATIVE_IMAGE and exchange on DEFAULT_IMAGE
export const ALTERNATIVE_IMAGE =
  'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg'
export const DEFAULT_IMAGE = `${HOST}/users/defaultUserImage.png`
export const setConnectionChat = (data: Props) => {
  const { setIsLoading, setMessages, id, setMessageLoading, setError, socket } = data

  socket.emit(GET_CHAT_SOCKET)
  socket.on(CHAT_ERROR_SOCKET, (data) => setError(data))
  socket.on(GET_CHAT_SOCKET, (data) => {
    setIsLoading(false)
    setMessages(data)
  })
  socket.on(CHAT_MESSAGE_SOCKET, (data) => {
    setMessages((pre) => [...pre, data])
    if (data.userId === id) {
      setMessageLoading(false)
    }
  })
}
export const clearConnectionChat = (socket: SocketApp) => {
  socket.off(CHAT_ERROR_SOCKET)
  socket.off(GET_CHAT_SOCKET)
  socket.off(CHAT_MESSAGE_SOCKET)
}
