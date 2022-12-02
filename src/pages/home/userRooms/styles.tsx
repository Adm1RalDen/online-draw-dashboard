import styled from 'styled-components'

import { StyledScroll } from 'components/scroll/styles'

export const UserRoomsWrapper = styled(StyledScroll)`
  grid-area: myRooms;
  overflow: auto;
  padding: 20px;
  box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.colors.teal.teal900};

  & > h3 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.middleUp};
    margin-bottom: 15px;
  }
`

export const UserCardsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`
