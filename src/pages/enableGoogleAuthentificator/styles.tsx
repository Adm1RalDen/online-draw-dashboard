import styled from 'styled-components'

import { DisableAuthentificatorWrapper } from 'pages/disableGoogleAuthentificator/styles'

export const EnableAuthentificatorSection = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.greenBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EnableAuthentificatorWrapper = styled.div`
  width: 800px;
  padding: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template: auto auto 450px / 1fr;
  gap: 30px;
  border-radius: 10px;

  & > h2 {
    text-align: center;
    margin-top: 10px;
  }
`

export const SuccessEnableAuthentificatorWrapper = styled(DisableAuthentificatorWrapper)``
