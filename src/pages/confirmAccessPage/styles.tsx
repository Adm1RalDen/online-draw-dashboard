import styled from 'styled-components'

import { Button } from 'components/button'
import { FlexContainer } from 'components/flex-container'

const ConfirmAccessPage = styled(FlexContainer)`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.greenBackground};
`

const ConfirmAccessPageButton = styled(Button)`
  flex-basis: 50%;
`

const ConfirmAccessPageInputWrapper = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.middle};
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    margin: 15px 0px;
  }
`

const ConfirmAccessPageButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 5px;
`

const ConfirmAccessPageMain = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  padding: 10px;
  width: 350px;
  height: 185px;
`

export {
  ConfirmAccessPage,
  ConfirmAccessPageMain,
  ConfirmAccessPageInputWrapper,
  ConfirmAccessPageButtonsWrapper,
  ConfirmAccessPageButton
}
