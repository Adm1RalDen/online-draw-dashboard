import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { CHAT_MESSAGE_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'
import { FC, useRef, useState } from 'react'
import { AuthorizedUser } from 'types'

import { MessageInput, SendMessageButton } from './styles'

type Props = {
  isMessageLoading: boolean
  setIsMessageLoading: React.Dispatch<React.SetStateAction<boolean>>
  user: AuthorizedUser
  isLoadingChat: boolean
}

export const MessageControll: FC<Props> = ({
  isMessageLoading,
  user,
  setIsMessageLoading,
  isLoadingChat
}) => {
  const [message, setMessage] = useState('')
  const { socket } = useSocket()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSendMessage = () => {
    if (message && !isMessageLoading && !isLoadingChat) {
      setIsMessageLoading(true)
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
    if (e.code === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div>
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
    </div>
  )
}
