import styled from 'styled-components'

const RoomUsersBlock = styled.div`
  grid-area: roomUsers;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`

const RoomUserBlock = styled.div`
  padding: 10px;
  border: 2px solid gray;
`

export { RoomUserBlock, RoomUsersBlock }
