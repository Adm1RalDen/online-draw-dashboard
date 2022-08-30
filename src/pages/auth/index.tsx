import { LoginComponent } from "./login";
import { RegistrationComponent } from "./registration";
import { AuthSection, Container, Logo, Wrapper } from "./styles";

export const AuthPage = () => {
  return (
    <AuthSection>
      <Container>
        <Logo>Draw online</Logo>
        <Wrapper>
          <LoginComponent />
          <RegistrationComponent />
        </Wrapper>
      </Container>
    </AuthSection>
  );
};
