import { nanoid } from '@reduxjs/toolkit'
import { CHAT_MESSAGE_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'
import { useEffect, useRef, useState } from 'react'
import { userInfoSelector } from 'store/selectors/user.selector'
import { useAppSelector } from 'store/store'

import { LittleLoader } from 'components/loaders/littleLoader'

import { ChatMessage } from '../types'
import { clearConnectionChat, setConnectionChat } from './const'
import {
  ChatWrapper,
  Message,
  MessageInput,
  MessagesBlock,
  MessagesWrapper,
  SendMessageButton
} from './styles'

export const Chat = () => {
  const { socket } = useSocket()
  const [messages, setMessages] = useState<ChatMessage[] | []>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { data } = useAppSelector(userInfoSelector)
  const chatRef = useRef<HTMLDivElement>(null)
  const [messageLoading, setMessageLoading] = useState(false)
  const DEFAULT_IMAGE = 'http://localhost:5000/users/defaultUserImage.png'

  useEffect(() => {
    setConnectionChat({
      id: data.id,
      socket,
      setIsLoading,
      setMessageLoading,
      setMessages,
      setError
    })

    return () => clearConnectionChat(socket)
  }, [])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight)
    }
  }, [messages])

  const handleSendMessage = () => {
    if (inputRef.current?.value) {
      socket.emit(CHAT_MESSAGE_SOCKET, {
        userId: data.id,
        name: data.name,
        message: inputRef.current.value
      })
      inputRef.current.value = ''
    }
  }

  return (
    <ChatWrapper>
      <MessagesBlock ref={chatRef}>
        {error ? (
          <span>{error}</span>
        ) : isLoading ? (
          <LittleLoader />
        ) : (
          messages.map((msg: ChatMessage) => (
            <MessagesWrapper key={nanoid()}>
              <div>
                <img
                  src={`http://localhost:5000/users/${msg.userId}/${msg.userId}_avatar.png`}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).onerror = null
                    ;(e.target as HTMLImageElement).src = DEFAULT_IMAGE
                  }}
                  width={30}
                  height={30}
                  alt={msg.name}
                />
              </div>
              <Message myMessage={msg.userId === data.id}>
                <h4>{msg.name}</h4>
                <p>{msg.message}</p>
              </Message>
            </MessagesWrapper>
          ))
        )}
      </MessagesBlock>
      <div>
        <MessageInput type='text' ref={inputRef} />
        <SendMessageButton onClick={handleSendMessage} disabled={messageLoading}>
          send
        </SendMessageButton>
      </div>
    </ChatWrapper>
  )
}
