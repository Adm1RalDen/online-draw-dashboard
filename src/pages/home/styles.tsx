import styled from "styled-components";

import { Button } from "components/button/styles";

const SubmitButton = styled(Button)`
  margin-top: 10px;
  outline: none;
  border: none;

  &:disabled {
    background-color: #00596f;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const HomePageSection = styled.section`
  min-height: 100vh;
  background-color: #183333;
`;

const HomePageWrapper = styled.div`
  display: grid;
  height: 95vh;
  margin: 0 auto;
  max-width: 1400px;
  padding: 2vh 0px 0px 0px;
  grid-template: 50px 1fr 1fr / 1fr 3fr 2fr;
  grid-template-areas:
    "header header header"
    "activeRooms wrapper chat"
    "activeRooms myRooms chat";
  gap: 20px;

  & > div {
    border-radius: 10px;
  }
`;

const HomeHeader = styled.header`
  grid-area: header;
  box-shadow: 0px 0px 2px 1px #6b9080;
  background-color: #016a84;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const ActiveRoomsWrapper = styled.div`
  grid-area: activeRooms;
  overflow: auto;
  box-shadow: 0px 0px 2px 1px #6b9080;
  padding: 10px;
  background-color: #016a84;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0092b6;
    border-radius: 30px;
  }

  & > h3,
  p {
    color: #ffffff;
    font-weight: 400;
  }
  & > h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

const Wrapper = styled.div`
  grid-area: wrapper;
  padding: 20px;
  box-shadow: 0px 0px 2px 1px #0092b6;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > div:last-child {
    margin-top: 20px;
  }
`;

const ChatWrapper = styled(ActiveRoomsWrapper)`
  grid-area: chat;
  background-color: #016a84;
`;

const RoomWrapper = styled.div`
  border-radius: 10px;

  & > h3 {
    font-weight: 400;
    font-size: 22px;
    color: #fff;
  }
  & > form > div > input {
    width: 100%;
    height: 35px;
    margin-top: 5px;
    padding: 0px 10px;
    border-radius: 5px;
    background-color: #ffffff;
  }
`;

export {
  HomePageSection,
  HomePageWrapper,
  ActiveRoomsWrapper,
  ChatWrapper,
  Wrapper,
  RoomWrapper,
  HomeHeader,
  SubmitButton,
};
