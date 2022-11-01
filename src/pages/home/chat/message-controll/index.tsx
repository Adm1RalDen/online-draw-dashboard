import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { FC, useRef, useState } from 'react'

import { KeysCodes } from 'const/enums'
import { CHAT_MESSAGE_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'

import { MessageControllProps } from '../types'
import { MessageControllWrapper, MessageInput, SendMessageButton } from './styles'

export const MessageControll: FC<MessageControllProps> = ({
  isLoadingMessage,
  user,
  setIsLoadingMessage,
  isLoadingChat
}) => {
  const [message, setMessage] = useState('')
  const { socket } = useSocket()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSendMessage = () => {
    if (message && !isLoadingMessage && !isLoadingChat) {
      setIsLoadingMessage(true)

      socket.emit(CHAT_MESSAGE_SOCKET, {
        userId: user.id,
        name: user.name,
        message: message
      })

      inputRef?.current?.focus()
      setMessage('')
    }
  }

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === KeysCodes.ENTER) {
      handleSendMessage()
    }
  }

  return (
    <MessageControllWrapper>
      <MessageInput
        disabled={isLoadingChat}
        ref={inputRef}
        type='text'
        isShow={message}
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyDown}
      />
      <SendMessageButton onClick={handleSendMessage} disabled={isLoadingChat} isShow={message}>
        <PaperAirplaneIcon />
      </SendMessageButton>
    </MessageControllWrapper>
  )
}
