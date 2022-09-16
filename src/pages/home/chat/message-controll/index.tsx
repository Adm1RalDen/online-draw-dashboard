import { CHAT_MESSAGE_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'
import { FC, useState } from 'react'

import { MessageInput, SendMessageButton } from './styles'

type Props = {
  messageLoading: boolean
  setMessageLoading: React.Dispatch<React.SetStateAction<boolean>>
  data: any
}
export const MessageControll: FC<Props> = ({ messageLoading, setMessageLoading, data }) => {
  const [message, setMessage] = useState('')
  const { socket } = useSocket()

  const handleSendMessage = () => {
    if (message) {
      socket.emit(CHAT_MESSAGE_SOCKET, {
        userId: data.id,
        name: data.name,
        message: message
      })
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
      <MessageInput type='text' value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />
      {message && <SendMessageButton onClick={handleSendMessage} disabled={messageLoading} />}
    </div>
  )
}
