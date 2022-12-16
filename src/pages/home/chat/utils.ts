import { CHAT_ERROR_SOCKET, CHAT_MESSAGE_SOCKET, GET_CHAT_SOCKET } from 'const/sockets'

import { SocketApp } from 'types/socket'

import { ChatConnectionParams } from './types'

export const connectToChat = (data: ChatConnectionParams) => {
  const { setIsLoadingChat, setMessages, setIsLoadingMessage, setError, id, socket } = data

  socket.emit(GET_CHAT_SOCKET)
  socket.on(CHAT_ERROR_SOCKET, (data) => setError(data))

  socket.on(GET_CHAT_SOCKET, (data) => {
    setIsLoadingChat(false)
    setMessages(() => (data.length > 100 ? data.slice(data.length - 100) : data))
  })

  socket.on(CHAT_MESSAGE_SOCKET, (data) => {
    if (data.user._id === id) setIsLoadingMessage(false)

    setMessages((pre) =>
      pre.length > 100 ? pre.slice(pre.length - 100).concat(data) : [...pre, data]
    )
  })
}

export const closeConnectionToChat = (socket: SocketApp) => {
  socket.off(CHAT_ERROR_SOCKET)
  socket.off(GET_CHAT_SOCKET)
  socket.off(CHAT_MESSAGE_SOCKET)
}
