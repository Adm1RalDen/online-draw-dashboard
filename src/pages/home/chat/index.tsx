import { nanoid } from '@reduxjs/toolkit'
import { useSocket } from 'hooks/useSocket'
import React, { useEffect, useRef, useState } from 'react'
import { useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'
import { setImageUrl } from 'utils/setImageUrl'

import { LittleLoader } from 'components/loaders/littleLoader'

import { ChatMessage } from '../types'
import { DEFAULT_IMAGE, clearConnectionChat, setConnectionChat } from './const'
import { MessageControll } from './message-controll'
import { ChatWrapper, Message, MessagesBlock, MessagesWrapper } from './styles'

export const Chat = () => {
  const { socket } = useSocket()
  const [messages, setMessages] = useState<ChatMessage[] | []>([])
  const [isLoading, setIsLoading] = useState(true)
  const [messageLoading, setMessageLoading] = useState(false)
  const [error, setError] = useState('')
  const { data } = useAppSelector(userInfoSelector)
  const chatRef = useRef<HTMLDivElement>(null)

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
        ) : isLoading ? (
          <LittleLoader />
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
      </MessagesBlock>
      <MessageControll
        messageLoading={messageLoading}
        setMessageLoading={setMessageLoading}
        data={data}
      />
    </ChatWrapper>
  )
}
