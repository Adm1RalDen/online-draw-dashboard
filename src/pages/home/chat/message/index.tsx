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
  currentUserId: string
}

export const ChatMessage: FC<ChatMessageProps> = ({
  msg: { userId, name, message },
  onError,
  currentUserId
}) => (
  <MessageWrapper>
    <Icon
      src={getImageUrl(`users/${userId}/${userId}_avatar.png`)}
      size={30}
      alt={name}
      onError={onError}
    />
    <Message myMessage={userId === currentUserId}>
      <Heading4>{name}</Heading4>
      <Paragraph>{message}</Paragraph>
    </Message>
  </MessageWrapper>
)
