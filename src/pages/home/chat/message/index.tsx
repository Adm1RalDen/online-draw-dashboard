import { FC } from 'react'

import { Icon } from 'components/icon'
import { ChatMessageType } from 'pages/home/types'
import { Heading4, Paragraph } from 'styles/typography/styles'

import { getImageUrl } from 'utils/getImageUrl'

import { FunctionWithParams } from 'types'

import { Message, MessageWrapper } from '../styles'

interface ChatMessageProps {
  msg: ChatMessageType
  currentUserId: string
  onError: FunctionWithParams<React.SyntheticEvent<HTMLImageElement, Event>>
}

export const ChatMessage: FC<ChatMessageProps> = ({ msg: { user, message }, currentUserId }) => (
  <MessageWrapper>
    <Icon src={getImageUrl(user.avatar)} size={30} alt={user.name} />
    <Message myMessage={user._id === currentUserId}>
      <Heading4>{user.name}</Heading4>
      <Paragraph>{message}</Paragraph>
    </Message>
  </MessageWrapper>
)
