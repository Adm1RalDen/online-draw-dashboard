import styled from 'styled-components'

import { Button } from 'components/button'
import { ButtonImage } from 'components/button-image'
import { Container } from 'components/container'
import { StyledScroll } from 'components/scroll/styles'

export const SubmitButton = styled(Button).attrs(() => ({ type: 'submit' }))`
  margin-top: ${({ theme }) => theme.spacing.s};
  outline: none;
  border: none;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkCyan};
    cursor: not-allowed;
  }
`
export const UserCabinetButton = styled(ButtonImage)`
  margin-right: ${({ theme }) => theme.spacing.tiny}; ;
`

export const HomePageSection = styled.section`
  min-height: 100vh;
`

export const HomePageWrapper = styled(Container)`
  display: grid;
  height: 95vh;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 2vh 0px 0px 0px;
  grid-template: 50px 1fr 1fr / 1fr 3fr 2fr;
  grid-template-areas:
    'header header header'
    'activeRooms wrapper chat'
    'activeRooms myRooms chat';

  & > div {
    border-radius: 5px;
  }
`

export const HomeHeader = styled.header`
  grid-area: header;
  box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.colors.lightGreen};
  background-color: ${({ theme }) => theme.colors.darkSlateGray};
  padding: ${({ theme }) => theme.spacing.tiny};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};

  & > div {
    border-radius: 5px;
    padding: ${({ theme }) => theme.spacing.tiny};
  }
`

export const ActiveRoomsWrapper = styled(StyledScroll)`
  grid-area: activeRooms;
  overflow: hidden auto;
  box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.colors.lightGreen};
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.colors.darkSlateGray};
`

export const HomeWrapper = styled.div`
  grid-area: wrapper;
  padding: ${({ theme }) => theme.spacing.sm};
  box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.colors.darkSlateGray};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  & > div:last-child {
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`

export const ChatWrapper = styled(ActiveRoomsWrapper)`
  grid-area: chat;

  & > h3 {
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }
`
