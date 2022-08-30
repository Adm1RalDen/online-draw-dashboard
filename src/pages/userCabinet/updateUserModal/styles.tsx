import styled from "styled-components";

const UserForm = styled.form`
  min-width: 300px;
  max-width: 1200px;
  overflow-y: scroll;
  height: 90vh;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.light_gray};
`;

const ButtonWrapper = styled.div`
  display: flex;
`;
const AvatarWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
`;

const RadioButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: white;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  gap: 10px;

  & > div {
    padding: 5px;
    border-radius: 10px;
    border: 2px solid ${(p) => p.theme.colors.light_gray};
  }
  & > div > h4 {
    padding: 10px 0px;
  }
`;

export { UserForm, ButtonWrapper, RadioButtonsWrapper, AvatarWrapper };
