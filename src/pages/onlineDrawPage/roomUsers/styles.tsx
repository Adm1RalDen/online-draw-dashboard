import styled from 'styled-components'

export const RoomUsersBlock = styled.div`
  grid-area: roomUsers;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.teal.teal900};
`

export const RoomUserBlock = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.teal.teal900};
  box-shadow: 1px 2px 3px 2px ${({ theme }) => theme.colors.cyan.cyan900};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
`
