import styled, { css } from 'styled-components'

export const SettingsPageHeaderWrapper = styled.header<{ isCollapsedNavigation: boolean }>`
  display: grid;
  grid-template: auto / auto minmax(100px, 200px) auto;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  & > svg {
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media ${({ theme }) => theme.devices.mobile} {
      ${(p) =>
        !p.isCollapsedNavigation &&
        css`
          width: 30px;
          height: 30px;
          position: fixed;
          top: 15px;
          left: calc(100vw - 50px);
        `}
    }
  }
`
