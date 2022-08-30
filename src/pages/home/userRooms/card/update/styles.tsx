import styled from "styled-components";

const UpdateModalWrapper = styled.div`
  background-color: #fff;

  padding: 10px;
  width: 350px;
  height: 250px;
`;

const UpdateModalForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  & > div > input:not([type="checkbox"]) {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  & > div > input:not([type="text"]) {
    display: block;
    width: 20px;
    height: 20px;
    margin-top: 10px;
  }
`;

const UpdateModalButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  & > button {
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    flex-basis: 50%;
    height: 30px;
    transition: all 0.3s;

    &:focus {
      box-shadow: 0px 0px 2px 5px #1692ff;
    }
  }

  & > button:first-child {
    background-color: #006900;
    &:hover {
      background-color: #00cf00;
    }
  }
  & > button:last-child {
    background-color: #930202;
    &:hover {
      background-color: #ed1b1b;
    }
  }
`;

export { UpdateModalWrapper, UpdateModalForm, UpdateModalButtonsWrapper };
