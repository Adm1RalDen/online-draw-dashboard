import styled from 'styled-components'

import { ButtonImage } from 'components/button-image'
import { Input } from 'components/input'
import { StyledScroll } from 'components/scroll/styles'

type WrapperProps = {
  myMessage: boolean
}

const MessagesBlock = styled(StyledScroll)`
  max-height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.greenBackground};
  border-radius: 5px;
  padding: 10px;
`

const ChatWrapper = styled.div`
  height: calc(100% - 50px);
  display: grid;
  grid-template: 1fr 50px / 1fr;

  & > div:last-child {
    margin-top: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.greenBackground};
    display: flex;
    align-items: center;
    padding: 0px 10px;
  }
`

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

const MessagesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 10px;
  padding-right: 10px;

  & > div:first-child > img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`

const Message = styled.div<WrapperProps>`
  flex-grow: 1;
  padding: 5px;
  background-color: ${(p) => (p.myMessage ? p.theme.colors.aquaMiddle : p.theme.colors.aquaGreen)};
  border-radius: 10px;

  & > h4 {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gold};
  }
  & > p {
    margin-top: 5px;
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.white};
    word-break: break-all;
  }
`

export { Message, MessagesWrapper, ChatWrapper, SendMessageButton, MessageInput, MessagesBlock }
