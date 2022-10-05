import styled from 'styled-components'

import { Button } from 'components/button'
import { ButtonImage } from 'components/button-image'
import { Input } from 'components/input'

const User2FAComponentBlock = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-radius: 5px;
  padding: 15px;

  & > h2 {
    font-weight: 300;
    font-size: 19px;
    text-align: center;
    margin-bottom: 10px;
  }
`
const User2FAWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  & > div {
    height: 35px;
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
const QrCodeWrapper = styled.div`
  text-align: center;
`
const User2FAButton = styled(Button)`
  width: 100%;
  height: 100%;
  border: none;
`
const User2FAErrorSpan = styled.p`
  height: 24px;
  padding: 3px 0px;
  color: ${({ theme }) => theme.colors.red};
  font-size: 16px;
`
const User2FASuccessSpan = styled(User2FAErrorSpan)`
  color: ${({ theme }) => theme.colors.green};
`
const User2FACloseModalButton = styled(ButtonImage)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 35px;
  height: 35px;
  background-color: transparent;
  transition-duration: 0.1s;
  box-shadow: none;

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
  QrCodeWrapper,
  User2FAInput,
  User2FAButton,
  User2FAWrapper,
  User2FAErrorSpan,
  User2FASuccessSpan,
  User2FACloseModalButton
}
