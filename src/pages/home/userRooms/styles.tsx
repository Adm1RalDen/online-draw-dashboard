import styled from "styled-components";

const UserRoomsWrapper = styled.div`
  grid-area: myRooms;
  padding: 20px;
  box-shadow: 0px 0px 2px 1px #6b9080;
  overflow: auto;

  & > h3 {
    color: #ffffff;
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

const UserCardsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

export { UserRoomsWrapper, UserCardsWrapper };
