import { useState } from 'react'

import { Loader } from 'components/loader'

import { useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'

import { Portal } from 'utils/portal'

import { LoginComponent } from './login'
import { RegistrationComponent } from './registration'
import { AuthSection, Container, Logo, Wrapper } from './styles'
import { ChangeAuthWay } from './сhangeAuthWay'

export const AuthPage = () => {
  const { isLoading } = useAppSelector(userInfoSelector)
  const [isLogin, setIsLogin] = useState(false)

  return (
    <AuthSection>
      <Container>
        <Logo>Draw online</Logo>
        <Wrapper>
          {isLogin ? <LoginComponent /> : <RegistrationComponent />}
          <ChangeAuthWay isLogin={isLogin} setIsLogin={setIsLogin} />
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
