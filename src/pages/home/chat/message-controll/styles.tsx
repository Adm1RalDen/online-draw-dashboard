import styled from 'styled-components'

import { ButtonImage } from 'components/button-image'
import { Input } from 'components/input'

export const MessageControllWrapper = styled.div`
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.greenBackground};
  display: flex;
  align-items: center;
  padding: 0px 10px;
`

export const MessageInput = styled(Input)<{ isShow: string }>`
  height: 30px;
  flex-grow: 1;
  transition: all 0.2s linear;
  padding: 0px 10px;
  border-radius: 5px;
  border-top-right-radius: ${({ isShow }) => (isShow ? '15px' : '5px')};
  border-bottom-right-radius: ${({ isShow }) => (isShow ? '15px' : '5px')};
`

export const SendMessageButton = styled(ButtonImage)<{ isShow: string }>`
  width: ${({ isShow }) => (isShow ? '35px' : '0px')};
  box-shadow: none;
  height: 30px;
  transition-duration: 0.2s;
  background-color: transparent;
  margin-left: 5px;

  & > svg {
    width: inherit;
    height: inherit;
  }

  &:hover {
    background-color: transparent;
    box-shadow: none;
  }
`
