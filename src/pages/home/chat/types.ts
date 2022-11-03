import { AuthorizedUser, FunctionWithParams } from 'types'
import { SocketApp } from 'types/socket'

import { ChatMessage } from '../types'

export interface ChatConnectionParams {
  socket: SocketApp
  setIsLoadingChat: FunctionWithParams<boolean>
  setMessages: React.Dispatch<React.SetStateAction<[] | ChatMessage[]>>
  setIsLoadingMessage: FunctionWithParams<boolean>
  setError: FunctionWithParams<string>
  id: string
}

export interface MessageControllProps {
  isLoadingMessage: boolean
  setIsLoadingMessage: React.Dispatch<React.SetStateAction<boolean>>
  user: AuthorizedUser
  isLoadingChat: boolean
}

export interface ChatWrapperProps {
  myMessage: boolean
}
