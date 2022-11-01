import styled from 'styled-components'

import { Container } from 'components/container'

const SettingsPageWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.greenBackground};
  color: ${({ theme }) => theme.colors.white};
`

const SettingsPageContainer = styled(Container)`
  display: grid;
  position: relative;
  padding: 10px;
  min-height: 100vh;
  gap: 15px;
  grid-template: 50px 1fr/ 210px 1fr;

  & > header,
  aside,
  main {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.aqua};
    box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.border.liteGreen};
    padding: 10px;
  }
`

export { SettingsPageWrapper, SettingsPageContainer }
