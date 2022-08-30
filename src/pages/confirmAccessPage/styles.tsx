import styled from "styled-components";

const ConfirmAccessPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121212;
`;

const ConfirmAccessPageMain = styled.div`
  border: 2px solid #d5d5d5c8;
  border-radius: 10px;
  padding: 10px;
  width: 350px;
  height: 185px;

  & > div:first-child {
    & > p {
      font-size: 20px;
      text-align: center;
      color: #fff;
      margin: 15px 0px;
    }

    & > input {
      width: 100%;
      height: 35px;
      outline: none;
      padding: 0px 10px 0px 10px;

      &:focus {
        box-shadow: 0px 0px 10px 2px #0040ff;
      }
    }
  }

  & > div:last-child {
    display: flex;
    margin-top: 20px;
    gap: 5px;

    & > button {
      appearance: none;
      cursor: pointer;
      transition: all 0.3s;
      color: #000000;
      background-color: #fff;
      height: 35px;
      flex-basis: 50%;

      &:hover {
        background-color: #747474;
        color: #ffffff;
      }
    }
  }
`;

export { ConfirmAccessPage, ConfirmAccessPageMain };
