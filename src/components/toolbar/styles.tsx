import styled, { css } from 'styled-components'

import { ButtonImage } from 'components/button-image'
import { FlexContainer } from 'components/flex-container'

import { ToolButtonProps } from './types'

export const StyledToolbar = styled(FlexContainer)`
  padding: 5px;
  grid-area: toolbar;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.aqua};
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`

export const SnapshotButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
  & > button {
    background-color: ${({ theme }) => theme.colors.aquaMiddle};
    & > svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const DrawToolsWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const ToolButton = styled(ButtonImage)<ToolButtonProps>`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 2px solid transparent;
  transition-duration: 0.1s;
  fill: ${({ theme }) => theme.colors.white};

  ${(p) =>
    p.active &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.aquaMiddle};
    `};
`
