import { CHAT_ERROR_SOCKET, CHAT_MESSAGE_SOCKET, GET_CHAT_SOCKET } from 'const/sockets'

import { setImageUrl } from 'utils/setImageUrl'

import { FunctionWithParams } from 'types'
import { SocketApp } from 'types/socket'

import { ChatMessage } from '../types'

export const DEFAULT_IMAGE = setImageUrl('users/defaultUserImage.png')

type Props = {
  socket: SocketApp
  setIsLoadingChat: FunctionWithParams<boolean>
  setMessages: React.Dispatch<React.SetStateAction<[] | ChatMessage[]>>
  setIsMessageLoading: FunctionWithParams<boolean>
  setError: FunctionWithParams<string>
  id: string
}

export const setConnectionChat = (data: Props) => {
  const { setIsLoadingChat, setMessages, id, setIsMessageLoading, setError, socket } = data

  socket.emit(GET_CHAT_SOCKET)
  socket.on(CHAT_ERROR_SOCKET, (data) => setError(data))
  socket.on(GET_CHAT_SOCKET, (data) => {
    setIsLoadingChat(false)
    setMessages(() => {
      return data.length > 100 ? [...data.slice(data.length - 100)] : [...data]
    })
  })
  socket.on(CHAT_MESSAGE_SOCKET, (data) => {
    setMessages((pre) => {
      return pre.length > 100 ? [...pre.slice(pre.length - 100), data] : [...pre, data]
    })
    if (data.userId === id) {
      setIsMessageLoading(false)
    }
  })
}
export const clearConnectionChat = (socket: SocketApp) => {
  socket.off(CHAT_ERROR_SOCKET)
  socket.off(GET_CHAT_SOCKET)
  socket.off(CHAT_MESSAGE_SOCKET)
}
