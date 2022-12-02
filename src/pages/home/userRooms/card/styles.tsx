import styled from 'styled-components'

import { ButtonImage } from 'components/button-image'

const CardSettings = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 7px;
  right: 45px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 5px;
`

const RoomCard = styled.div<{ active: boolean }>`
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray.gray300};
  font-weight: 300;
  background-color: ${(p) =>
    p.active ? p.theme.colors.teal.teal700 : p.theme.colors.teal.teal900};
  transition: 0.3s all;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.teal.teal700};
  }
  &:hover span {
    display: block;
  }

  & > span {
    display: ${(p) => (p.active ? 'block' : 'none')};
    position: absolute;
    right: 0;
    top: 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transition: 0.3s all;
  }
`

const CardSettingsButton = styled(ButtonImage)`
  width: 100%;
  height: 30px;
  border-radius: none;
  background-color: transparent;
  box-shadow: none;

  &:hover {
    box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.colors.gray.gray600};
    background-color: transparent;
  }
  & > svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.colors.black};
  }
`

const CardButton = styled(CardSettingsButton)``

export { RoomCard, CardSettings, CardSettingsButton, CardButton }
