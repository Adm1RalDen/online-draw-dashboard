import styled from 'styled-components'
import { Span } from 'styles/typography/styles'

import { Button } from 'components/button'
import { ButtonImage } from 'components/button-image'
import { Input } from 'components/input'

const User2FAComponentBlock = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-radius: 5px;
  padding: 45px 15px 25px 15px;
`

const User2FAWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 5px;

  & > div {
    flex-basis: 25%;
  }
`

const User2FAInput = styled(Input)`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  height: 35px;
  border-radius: 5px;
  flex-grow: 1;
`

const User2FAButton = styled(Button)`
  border: none;
`

const User2FAErrorText = styled(Span)`
  color: ${({ theme }) => theme.colors.red};
`

const User2FASuccessText = styled(User2FAErrorText)`
  color: ${({ theme }) => theme.colors.green};
`

const User2FACloseModalButton = styled(ButtonImage)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  background-color: transparent;
  transition-duration: 0.1s;
  box-shadow: none;

  &:disabled {
    background-color: transparent;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    & > svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  & > svg {
    fill: ${({ theme }) => theme.colors.black};
    width: 25px;
    height: 25px;
  }
`
export {
  User2FAComponentBlock,
  User2FAInput,
  User2FAButton,
  User2FAWrapper,
  User2FAErrorText,
  User2FASuccessText,
  User2FACloseModalButton
}
