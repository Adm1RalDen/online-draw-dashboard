import styled from 'styled-components'

import { Button } from 'components/button'
import { Input } from 'components/input'
import { StyledScroll } from 'components/scroll/styles'

const SubmitButton = styled(Button)`
  margin-top: 10px;
  outline: none;
  border: none;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkAqua};
    &:disabled {
      cursor: not-allowed;
    }
  }
`

const HomePageSection = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.greenBackground};
`

const HomePageWrapper = styled.div`
  display: grid;
  height: 95vh;
  gap: 20px;
  margin: 0 auto;
  max-width: 1400px;
  padding: 2vh 0px 0px 0px;
  grid-template: 50px 1fr 1fr / 1fr 3fr 2fr;
  grid-template-areas:
    'header header header'
    'activeRooms wrapper chat'
    'activeRooms myRooms chat';

  & > div {
    border-radius: 10px;
  }
`

const HomeHeader = styled.header`
  grid-area: header;
  box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.border.liteGreen};
  background-color: ${({ theme }) => theme.colors.aqua};
  padding: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: right;
`

const ActiveRoomsWrapper = styled(StyledScroll)`
  grid-area: activeRooms;
  overflow: auto;
  box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.border.liteGreen};
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.aqua};

  & > h3,
  p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
  }
  & > h3 {
    font-size: ${({ theme }) => theme.fontSizes.middleUp};
    margin-bottom: 15px;
  }
`

const Wrapper = styled.div`
  grid-area: wrapper;
  padding: 20px;
  box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.colors.aqua};
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div:last-child {
    margin-top: 20px;
  }
`

const ChatWrapper = styled(ActiveRoomsWrapper)`
  grid-area: chat;
  background-color: ${({ theme }) => theme.colors.aqua};
`

const RoomWrapper = styled.div`
  border-radius: 10px;
  & > form {
    padding-top: 5px;
  }
  & > h3 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.middleUp};
    color: ${({ theme }) => theme.colors.white};
  }
`

const RoomInput = styled(Input)`
  width: 100%;
  height: 35px;
  margin-top: 5px;
`

export {
  HomePageSection,
  HomePageWrapper,
  ActiveRoomsWrapper,
  ChatWrapper,
  Wrapper,
  RoomWrapper,
  HomeHeader,
  SubmitButton,
  RoomInput
}
