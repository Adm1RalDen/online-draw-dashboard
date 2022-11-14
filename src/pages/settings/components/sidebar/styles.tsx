import styled, { css } from 'styled-components'

export const SettingsPageSideBarAside = styled.aside`
  overflow: hidden;
  position: sticky;
  padding: 10px 0px;
  height: 100vh;
  width: 100%;
  top: 0;

  & > h2 {
    margin-bottom: 30px;
    padding-left: 5px;
    white-space: nowrap;
  }
`

export const SettingsPageSideBarLi = styled.li<{ isActive: boolean }>`
  display: grid;
  grid-template: 1fr / 20px 1fr;
  position: relative;
  font-size: 16px;
  gap: 10px;
  padding: 10px 10px 10px 10px;
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
    z-index: 1;
    width: 20px;
    height: 20px;
  }

  & > a {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
`
