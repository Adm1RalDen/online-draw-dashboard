import styled from 'styled-components'

import { Button } from 'components/button'
import { Container } from 'components/container'
import { Field } from 'components/field'
import { Heading3 } from 'styles/typography/styles'

export const SettingsPageSection = styled.section`
  background-color: ${({ theme }) => theme.colors.greenBackground};
  color: ${({ theme }) => theme.colors.white};
`

export const SettingsPageContainer = styled(Container)<{ isMobileAside: boolean }>`
  display: grid;
  min-height: 100vh;
  grid-template-columns: ${(p) => (p.isMobileAside ? '180px' : '45px')} 1fr;
  grid-template-rows: 1fr;
  transition: all 300ms;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    grid-template-columns: ${(p) => (p.isMobileAside ? '45px' : '180px')} 1fr;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    grid-template-columns: ${(p) => (p.isMobileAside ? '0px' : '180px')} 1fr;
  }
`

export const SettingsPageMain = styled.main`
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.aqua};
  padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.sm}`};
`

export const SettingsHeading3 = styled(Heading3)`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.tiny};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray};
`

export const SettingsSubmitButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.s};
  width: 200px;
`

export const SettingsPageContantWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const SettingsPageFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`

export const SettingsPageField = styled(Field)`
  height: 30px;
  max-width: 300px;
  margin-bottom: ${({ theme }) => theme.spacing.s};
`
