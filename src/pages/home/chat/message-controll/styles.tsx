import styled from 'styled-components'

import { ButtonImage } from 'components/button-image'
import { Input } from 'components/input'

type ButtonProps = {
  isShow: boolean
}

const MessageInput = styled(Input)<ButtonProps>`
  height: 30px;
  flex-grow: 1;
  transition: all 0.2s linear;
  padding: 0px 10px;
  border-radius: 5px;
  border-top-right-radius: ${({ isShow }) => (isShow ? '15px' : '5px')};
  border-bottom-right-radius: ${({ isShow }) => (isShow ? '15px' : '5px')};
`
const SendMessageButton = styled(ButtonImage)<ButtonProps>`
  height: 30px;
  transition: all 0.2s linear;
  width: ${({ isShow }) => (isShow ? '35px' : '0px')};
  color: ${({ theme }) => theme.colors.white};
  background-image: url('/assets/send.png');
  background-size: 25px 25px;
  margin-left: 5px;
`
export { MessageInput, SendMessageButton }
