import styled from 'styled-components'

import { StyledScroll } from 'components/scroll/styles'

type WrapperProps = {
  myMessage: boolean
}

export const ChatWrapper = styled.div`
  height: calc(100% - 50px);
  display: grid;
  grid-template: 1fr 50px / 1fr;
`

export const MessagesWrapper = styled(StyledScroll)`
  position: relative;
  max-height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.greenBackground};
  border-radius: 5px;
  padding: 10px;
`

export const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 10px;
  padding-right: 10px;
`

export const UserIcon = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  object-fit: cover;
`

export const Message = styled.div<WrapperProps>`
  flex-grow: 1;
  padding: 5px;
  background-color: ${(p) => (p.myMessage ? p.theme.colors.aquaMiddle : p.theme.colors.aquaGreen)};
  border-radius: 10px;

  & > h4 {
    color: ${({ theme }) => theme.colors.gold};
  }

  & > p {
    margin-top: 5px;
    margin-left: 10px;
    word-break: break-all;
  }
`

export const LoadIndicator = styled.div`
  position: sticky;
  height: 0px;
  top: 50%;
  bottom: 50%;
  left: 0;
  right: 0;
`
