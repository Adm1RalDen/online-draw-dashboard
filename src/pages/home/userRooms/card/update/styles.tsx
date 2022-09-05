import styled from "styled-components";

const UpdateModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
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
    flex-basis: 50%;
  }

  & > button:first-child {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
  & > button:last-child {
    background-color: ${({ theme }) => theme.colors.darkRed};
    &:hover {
      background-color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export { UpdateModalWrapper, UpdateModalForm, UpdateModalButtonsWrapper };
