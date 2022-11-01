import React, { useEffect, useRef, useState } from 'react'

import { Loader } from 'components/loader'
import { Heading4, Paragraph } from 'styles/typography/styles'

import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'

import { setImageUrl } from 'utils/setImageUrl'

import { ChatMessage } from '../types'
import { DEFAULT_IMAGE } from './const'
import { MessageControll } from './message-controll'
import {
  ChatWrapper,
  LoadIndicator,
  Message,
  MessageWrapper,
  MessagesWrapper,
  UserIcon
} from './styles'
import { clearConnectionChat, setConnectionChat } from './utils'

export const Chat = () => {
  const [error, setError] = useState('')
  const [messages, setMessages] = useState<ChatMessage[] | []>([])
  const [isLoadingChat, setIsLoadingChat] = useState(true)
  const [isLoadingMessage, setIsLoadingMessage] = useState(false)

  const { data } = useAppSelector(userInfoSelector)
  const { socket } = useSocket()
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setConnectionChat({
      id: data.id,
      socket,
      setIsLoadingChat,
      setIsLoadingMessage,
      setMessages,
      setError
    })

    return () => clearConnectionChat(socket)
  }, [data.id, socket])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight)
    }
  }, [messages])

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.onerror = null
    target.src = DEFAULT_IMAGE
  }

  return (
    <ChatWrapper>
      <MessagesWrapper ref={chatRef}>
        {error && <span>{error}</span>}

        {!error && isLoadingChat && <Loader type='solid' />}

        {!error &&
          !isLoadingChat &&
          messages.map((msg: ChatMessage) => (
            <MessageWrapper key={msg._id}>
              <UserIcon
                src={setImageUrl(`users/${msg.userId}/${msg.userId}_avatar.png`)}
                width={30}
                height={30}
                alt={msg.name}
                onError={onError}
              />
              <Message myMessage={msg.userId === data.id}>
                <Heading4>{msg.name}</Heading4>
                <Paragraph>{msg.message}</Paragraph>
              </Message>
            </MessageWrapper>
          ))}

        {isLoadingMessage && (
          <LoadIndicator>
            <Loader type='solid' />
          </LoadIndicator>
        )}
      </MessagesWrapper>

      <MessageControll
        isLoadingChat={isLoadingChat}
        isLoadingMessage={isLoadingMessage}
        setIsLoadingMessage={setIsLoadingMessage}
        user={data}
      />
    </ChatWrapper>
  )
}
