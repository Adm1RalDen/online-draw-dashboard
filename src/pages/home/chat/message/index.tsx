import { FC } from 'react'

import { Icon } from 'components/icon'
import { ChatMessageType } from 'pages/home/types'
import { Heading4, Paragraph } from 'styles/typography/styles'

import { getImageUrl } from 'utils/getImageUrl'

import { FunctionWithParams } from 'types'

import { Message, MessageWrapper } from '../styles'

interface ChatMessageProps {
  msg: ChatMessageType
  onError: FunctionWithParams<React.SyntheticEvent<HTMLImageElement, Event>>
  userId: string
}

export const ChatMessage: FC<ChatMessageProps> = ({ msg, onError, userId }) => (
  <MessageWrapper>
    <Icon
      src={getImageUrl(`users/${msg.userId}/${msg.userId}_avatar.png`)}
      size={30}
      alt={msg.name}
      onError={onError}
    />
    <Message myMessage={msg.userId === userId}>
      <Heading4>{msg.name}</Heading4>
      <Paragraph>{msg.message}</Paragraph>
    </Message>
  </MessageWrapper>
)
