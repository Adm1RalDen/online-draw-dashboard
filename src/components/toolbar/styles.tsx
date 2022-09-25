import styled, { css } from 'styled-components'

import { ButtonImage } from 'components/button-image'
import { FlexContainer } from 'components/flex-container'

type ToolButtonProps = {
  active?: boolean
}

const StyledToolbar = styled(FlexContainer)`
  padding: 5px;
  grid-area: toolbar;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`

const SnapshotButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
`

const DrawToolsWrapper = styled.div`
  display: flex;
  gap: 10px;

  & > input[type='color'] {
    width: 50px;
    padding: 0px;
    margin-top: 2px;
  }
`

const ToolButton = styled(ButtonImage)<ToolButtonProps>`
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};

  & > svg {
    color: #000;
  }
  ${(p) =>
    p.active &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.black};
    `};
`

export { ToolButton, StyledToolbar, SnapshotButtonsWrapper, DrawToolsWrapper }
