import { CHAT_ERROR_SOCKET, CHAT_MESSAGE_SOCKET, GET_CHAT_SOCKET } from 'const/sockets'

import { SocketApp } from 'types/socket'

import { ChatConnectionParams } from './types'

export const setConnectionChat = (data: ChatConnectionParams) => {
  const { setIsLoadingChat, setMessages, id, setIsLoadingMessage, setError, socket } = data

  socket.emit(GET_CHAT_SOCKET)
  socket.on(CHAT_ERROR_SOCKET, (data) => setError(data))

  socket.on(GET_CHAT_SOCKET, (data) => {
    setIsLoadingChat(false)
    setMessages(() => {
      return data.length > 100 ? [...data.slice(data.length - 100)] : [...data]
    })
  })

  socket.on(CHAT_MESSAGE_SOCKET, (data) => {
    if (data.userId === id) setIsLoadingMessage(false)

    setMessages((pre) => {
      return pre.length > 100 ? [...pre.slice(pre.length - 100), data] : [...pre, data]
    })
  })
}

export const clearConnectionChat = (socket: SocketApp) => {
  socket.off(CHAT_ERROR_SOCKET)
  socket.off(GET_CHAT_SOCKET)
  socket.off(CHAT_MESSAGE_SOCKET)
}
