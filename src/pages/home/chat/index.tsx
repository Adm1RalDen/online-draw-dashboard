import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect, useRef, useState } from 'react'

import { Loader } from 'components/loader'

import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'

import { setImageUrl } from 'utils/setImageUrl'

import { ChatMessage } from '../types'
import { DEFAULT_IMAGE, clearConnectionChat, setConnectionChat } from './const'
import { MessageControll } from './message-controll'
import { ChatWrapper, LoadIndicator, Message, MessagesBlock, MessagesWrapper } from './styles'

export const Chat = () => {
  const { socket } = useSocket()
  const [messages, setMessages] = useState<ChatMessage[] | []>([])
  const [isLoadingChat, setIsLoadingChat] = useState(true)
  const [isMessageLoading, setIsMessageLoading] = useState(false)
  const [error, setError] = useState('')
  const { data } = useAppSelector(userInfoSelector)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setConnectionChat({
      id: data.id,
      socket,
      setIsLoadingChat,
      setIsMessageLoading,
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
      <MessagesBlock ref={chatRef}>
        {error ? (
          <span>{error}</span>
        ) : isLoadingChat ? (
          <Loader type='solid' />
        ) : (
          messages.map((msg: ChatMessage) => (
            <MessagesWrapper key={nanoid()}>
              <div>
                <img
                  src={setImageUrl(`users/${msg.userId}/${msg.userId}_avatar.png`)}
                  width={30}
                  height={30}
                  alt={msg.name}
                  onError={onError}
                />
              </div>
              <Message myMessage={msg.userId === data.id}>
                <h4>{msg.name}</h4>
                <p>{msg.message}</p>
              </Message>
            </MessagesWrapper>
          ))
        )}
        {isMessageLoading && (
          <LoadIndicator>
            <Loader type='solid' />
          </LoadIndicator>
        )}
      </MessagesBlock>
      <MessageControll
        isLoadingChat={isLoadingChat}
        isMessageLoading={isMessageLoading}
        setIsMessageLoading={setIsMessageLoading}
        user={data}
      />
    </ChatWrapper>
  )
}
