import React, { useEffect, useRef, useState } from 'react'

import { Loader } from 'components/loader'

import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { ChatMessageType } from '../types'
import { DEFAULT_IMAGE } from './const'
import { ChatMessage } from './message'
import { MessageControll } from './message-controll'
import { ChatWrapper, LoadIndicator, MessagesWrapper } from './styles'
import { closeConnectionToChat, connectToChat } from './utils'

export const Chat = () => {
  const [error, setError] = useState('')
  const [messages, setMessages] = useState<ChatMessageType[] | []>([])
  const [isLoadingChat, setIsLoadingChat] = useState(true)
  const [isLoadingMessage, setIsLoadingMessage] = useState(false)

  const socket = useSocket()
  const chatRef = useRef<HTMLDivElement>(null)
  const data = useAppSelector(userDataSelector)

  useEffect(() => {
    connectToChat({
      id: data.id,
      socket,
      setIsLoadingChat,
      setIsLoadingMessage,
      setMessages,
      setError
    })

    return () => closeConnectionToChat(socket)
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
          messages.map((msg: ChatMessageType) => (
            <ChatMessage key={msg._id} msg={msg} currentUserId={data.id} onError={onError} />
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
