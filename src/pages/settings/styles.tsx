import styled from 'styled-components'

import { Container } from 'components/container'

export const SettingsPageWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.greenBackground};
  color: ${({ theme }) => theme.colors.white};
`

export const SettingsPageContainer = styled(Container)<{ isCollapsedSideBar: boolean }>`
  display: grid;
  min-height: 100vh;
  grid-template-columns: ${(p) => (p.isCollapsedSideBar ? '180px' : '45px')} 1fr;
  grid-template-rows: 1fr;
  transition: all 300ms;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    grid-template-columns: ${(p) => (p.isCollapsedSideBar ? '45px' : '180px')} 1fr;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    grid-template-columns: ${(p) => (p.isCollapsedSideBar ? '0px' : '180px')} 1fr;
  }
`

export const SettingsPageMain = styled.main`
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.aqua};
  padding: 10px 20px;
`
