import styled from 'styled-components'

import { FlexContainer } from 'components/flex-container'

export const ConfirmAccessPage = styled(FlexContainer)`
  min-height: 100vh;
`

export const ConfirmAccessPageButtonsWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.sm};
  gap: ${({ theme }) => theme.spacing.tiny};

  & > button {
    flex-basis: 50%;
  }
`

export const ConfirmAccessPageWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacing.sm};
  width: 350px;

  & > p {
    color: ${({ theme }) => theme.colors.white};
    margin: ${({ theme }) => theme.spacing.base} 0;
    text-align: center;
    font-size: 1.1em;
  }
`
