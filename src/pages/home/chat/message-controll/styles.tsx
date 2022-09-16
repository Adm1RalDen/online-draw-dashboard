import styled from 'styled-components'

import { ButtonImage } from 'components/button-image'
import { Input } from 'components/input'

const MessageInput = styled(Input)`
  height: 30px;
  flex-grow: 1;
  padding: 0px 10px;
  border-radius: 5px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`
const SendMessageButton = styled(ButtonImage)`
  height: 30px;
  color: ${({ theme }) => theme.colors.white};
  background-image: url('/assets/send.png');
  background-size: 25px 25px;
  margin-left: 5px;
`
export { MessageInput, SendMessageButton }
