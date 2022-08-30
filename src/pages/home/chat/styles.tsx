import styled from "styled-components";

type WrapperProps = {
  myMessage: boolean;
};
const ChatWrapper = styled.div`
  height: calc(100% - 50px);
  display: grid;
  grid-template: 1fr 50px / 1fr;

  & > div:first-child {
    max-height: 100%;
    overflow: auto;
    background-color: #183333;
    border-radius: 5px;
    padding: 10px;
  }
  & > div:last-child {
    margin-top: 5px;
    border-radius: 5px;
    background-color: #183333;
    display: flex;
    align-items: center;
    padding: 0px 10px;

    & > input {
      flex-grow: 1;
      height: 30px;
      border-radius: 5px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    & > button {
      width: 50px;
      height: 30px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
    }
  }
`;

const MessagesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 10px;
  padding-right: 10px;

  & > div:first-child > img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`;
const Message = styled.div<WrapperProps>`
  flex-grow: 1;
  padding: 5px;
  background-color: ${(p) => (p.myMessage ? "#0092b6" : "#3f6d78")};
  border-radius: 10px;

  & > h4 {
    color: #ffc628;
  }
  & > p {
    margin-top: 5px;
    margin-left: 10px;
    color: #fff;
    word-break: break-all;
  }
`;

export { Message, MessagesWrapper, ChatWrapper };
