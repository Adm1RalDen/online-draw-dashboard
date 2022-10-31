import styled, { css } from 'styled-components'

type Props = {
  isActive: boolean
}

const SettingsPageSideBarAside = styled.aside`
  padding: 10px 5px;
`

const SettingsPageSideBarLi = styled.li<Props>`
  display: flex;
  align-items: center;
  position: relative;
  gap: 5px;
  padding: 10px 5px;
  border-radius: 10px;

  ${(p) =>
    p.isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.aquaMiddle};
      box-shadow: 1px 2px 3px 2px ${({ theme }) => theme.colors.darkAqua};
    `}

  & > svg {
    width: 25px;
    height: 25px;
  }

  & > a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
`

export { SettingsPageSideBarAside, SettingsPageSideBarLi }
