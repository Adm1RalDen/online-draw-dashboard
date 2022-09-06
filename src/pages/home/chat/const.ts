import { CHAT_ERROR_SOCKET, CHAT_MESSAGE_SOCKET, GET_CHAT_SOCKET } from 'const/sockets'
import { Socket } from 'socket.io-client'
import { FunctionWithParams } from 'types'

import { ChatMessage } from '../types'

type Props = {
  socket: Socket<any, any>
  setIsLoading: FunctionWithParams<boolean>
  setMessages: FunctionWithParams<any>
  setMessageLoading: FunctionWithParams<boolean>
  setError: FunctionWithParams<string>
  id: string
}

export const SetConnectionChat = (data: Props) => {
  const { setIsLoading, setMessages, id, setMessageLoading, setError, socket } = data

  socket.emit(GET_CHAT_SOCKET)
  socket.on(CHAT_ERROR_SOCKET, (data: string) => setError(data))
  socket.on(GET_CHAT_SOCKET, (data: ChatMessage[]) => {
    setIsLoading(false)
    setMessages(data)
  })
  socket.on(CHAT_MESSAGE_SOCKET, (data: ChatMessage) => {
    setMessages((pre: ChatMessage[]) => [...pre, data])
    if (data.userId === id) {
      setMessageLoading(false)
    }
  })
}
export const ClearConnectionChat = (socket: Socket<any, any>) => {
  socket.off(CHAT_ERROR_SOCKET)
  socket.off(GET_CHAT_SOCKET)
  socket.off(CHAT_MESSAGE_SOCKET)
}
