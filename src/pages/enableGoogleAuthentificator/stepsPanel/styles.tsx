import styled, { css } from 'styled-components'

import { FlexContainer } from 'components/flex-container'

type Props = {
  isActive: boolean
}

const StepsPanelWrapper = styled.div`
  display: grid;
  grid-template: auto / repeat(5, minmax(110px, 1fr));

  & > div:nth-child(1) {
    &:before {
      width: 0px;
    }
  }

  & > div:not(:first-child) {
    &::before {
      width: calc(100% - 50px);
    }
  }
`

const StepsPanelContainer = styled.div<Props>`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: calc(-50% + 25px);
    bottom: 24px;
    height: 2px;
  }

  & > h6 {
    text-align: center;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      & > div {
        background-color: ${({ theme }) => theme.colors.gold};
        color: ${({ theme }) => theme.colors.black};
      }

      & > div > span {
        color: ${({ theme }) => theme.colors.black};
        font-weight: 400;
      }

      &::before {
        background-color: ${({ theme }) => theme.colors.gold};
      }
    `}
`

const StepsPanelCircle = styled(FlexContainer)`
  width: 50px;
  height: 50px;
  margin: 10px auto auto auto;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ theme }) => theme.colors.light_gray};
  color: ${({ theme }) => theme.colors.middleGray};

  & > span {
    pointer-events: none;
  }
`
export { StepsPanelWrapper, StepsPanelContainer, StepsPanelCircle }
