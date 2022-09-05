import styled from "styled-components";
import { Heading1, Heading2 } from "styles/typography/styles";

import { Button } from "components/button/styles";
import { Container as DefaultContainer } from "components/container/styles";

const AuthButton = styled(Button)`
  width: 100%;
  margin-top: 10px;

  &:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  &:disabled {
    background-color: transparent;
  }
`;

const AuthSection = styled.section`
  height: 100vh;
  background-color: ${(p) => p.theme.colors.greenBackground};
`;

const Container = styled(DefaultContainer)`
  display: grid;
  height: inherit;
  grid-template-columns: auto minmax(300px, 500px);
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Wrapper = styled.div`
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 20px;

  & > div:last-child {
    margin-top: 20px;
  }
`;

const Title = styled(Heading2)`
  color: ${({ theme }) => theme.colors.white};
`;

const Logo = styled(Heading1)`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
`;

const FormWrapper = styled.div``;

export {
  AuthSection,
  FormWrapper,
  Container,
  Logo,
  Wrapper,
  Title,
  AuthButton,
};
