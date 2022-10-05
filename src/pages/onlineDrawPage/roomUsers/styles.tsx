import styled from 'styled-components'

const RoomUsersBlock = styled.div`
  grid-area: roomUsers;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.aqua};
`

const RoomUserBlock = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.aquaMiddle};
  box-shadow: 1px 2px 3px 2px ${({ theme }) => theme.colors.darkAqua};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
`

export { RoomUserBlock, RoomUsersBlock }
