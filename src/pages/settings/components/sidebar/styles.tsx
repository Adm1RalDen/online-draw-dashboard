import styled, { css } from 'styled-components'

export const SettingsPageSideBarWrapper = styled.aside`
  overflow: hidden;
  position: sticky;
  padding: ${({ theme }) => theme.spacing.s} 0;
  height: 100vh;
  width: 100%;
  top: 0;

  & > h2 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding-left: ${({ theme }) => theme.spacing.tiny};
    white-space: nowrap;
  }
`

export const SettingsPageSideBarItem = styled.li<{ isActive: boolean }>`
  display: grid;
  grid-template: 1fr / 20px 1fr;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.small};
  gap: 10px;
  padding: ${({ theme }) => theme.spacing.s};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  cursor: pointer;

  & > span {
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
  }

  &::before,
  &::after {
    content: '';
    pointer-events: none;
    visibility: hidden;
    position: absolute;
    width: 50px;
    height: 50px;
    right: 0px;
    border-radius: 50%;
    background-color: transparent;
  }

  &::before {
    top: -50px;
    box-shadow: 25px 25px 0px 2px ${({ theme }) => theme.colors.aqua};
  }

  &::after {
    bottom: -50px;
    box-shadow: 25px -25px 0px 2px ${({ theme }) => theme.colors.aqua};
  }

  ${(p) =>
    p.isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.aqua};

      &::before,
      &::after {
        visibility: visible;
      }
    `}

  & > svg {
    position: relative;
    z-index: ${({ theme }) => theme.zIndex.element};
    width: 20px;
    height: 20px;
  }

  & > a {
    position: absolute;
    z-index: ${({ theme }) => theme.zIndex.overElement};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
`
