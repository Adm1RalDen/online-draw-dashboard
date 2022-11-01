import { Loader } from 'components/loader'

import { useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'

import { Portal } from 'utils/portal'

import { LoginComponent } from './login'
import { RegistrationComponent } from './registration'
import { AuthSection, Container, Logo, Wrapper } from './styles'

export const AuthPage = () => {
  const { isLoading } = useAppSelector(userInfoSelector)

  return (
    <AuthSection>
      <Container>
        <Logo>Draw online</Logo>
        <Wrapper>
          <LoginComponent />
          <RegistrationComponent />
          {isLoading && (
            <Portal>
              <Loader />
            </Portal>
          )}
        </Wrapper>
      </Container>
    </AuthSection>
  )
}
