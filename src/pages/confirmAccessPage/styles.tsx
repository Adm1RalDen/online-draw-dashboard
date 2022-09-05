import styled from "styled-components";

import { Button } from "components/button";
import { FlexContainer } from "components/flex-container/styles";

const ConfirmAccessPage = styled(FlexContainer)`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const ConfirmAccessPageButton = styled(Button)`
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.white};
  flex-basis: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ConfirmAccessPageInputWrapper = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.middle};
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    margin: 15px 0px;
  }
`;

const ConfirmAccessPageButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 5px;
`;

const ConfirmAccessPageMain = styled.div`
  border: 2px solid ${({ theme }) => theme.border.gray};
  border-radius: 10px;
  padding: 10px;
  width: 350px;
  height: 185px;
`;

export {
  ConfirmAccessPage,
  ConfirmAccessPageMain,
  ConfirmAccessPageInputWrapper,
  ConfirmAccessPageButtonsWrapper,
  ConfirmAccessPageButton,
};
