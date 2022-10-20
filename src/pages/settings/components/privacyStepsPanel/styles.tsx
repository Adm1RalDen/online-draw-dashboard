import styled, { css } from 'styled-components'

type Props = {
  isActive: boolean
}

const PrivacyStepsPanelWrapper = styled.div`
  display: grid;
  grid-template: auto / repeat(5, minmax(110px, 1fr));

  & > div:nth-child(2),
  div:nth-child(3),
  div:nth-child(4) {
    & > div::before {
      width: 100%;
    }
  }

  & > div:nth-child(5) {
    & > div::before {
      left: 0;
    }
  }
`

const PrivacyStepsPanelContainer = styled.div`
  position: relative;
  z-index: 1;

  & > h6 {
    text-align: center;
  }
`

const PrivacyStepsPanelCircle = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 10px auto auto auto;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.aqua};
  border: 2px solid white;
  color: ${({ theme }) => theme.colors.white};

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      border-color: ${({ theme }) => theme.colors.aquaMiddle};

      & > span {
        color: ${({ theme }) => theme.colors.black};
        font-weight: 400;
      }
    `}

  & > span {
    pointer-events: none;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    right: 0px;
    height: 2px;
    width: 50%;
    background-color: ${({ theme }) => theme.colors.white};
  }
`
export { PrivacyStepsPanelWrapper, PrivacyStepsPanelContainer, PrivacyStepsPanelCircle }
