import styled from 'styled-components'

export const RoomUsersBlock = styled.div`
  grid-area: roomUsers;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.darkSlateGray};
`

export const RoomUserBlock = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.darkSlateGray};
  box-shadow: 1px 2px 3px 2px ${({ theme }) => theme.colors.darkCyan};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
`
