import styled from 'styled-components'

type Props = {
  active: boolean
}

const CardSettings = styled.ul`
  position: absolute;
  top: 10px;
  right: 40px;
  width: 120px;
  list-style-type: none;
  padding: 5px;
`

const RoomCard = styled.div<Props>`
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.light_gray};
  font-weight: 300;
  background-color: ${(p) => (p.active ? p.theme.colors.aqua : p.theme.colors.darkAqua)};
  transition: 0.3s all;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.aqua};
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

const CardSettingsButton = styled.button`
  width: 100%;
  height: 30px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

export { RoomCard, CardSettings, CardSettingsButton }
