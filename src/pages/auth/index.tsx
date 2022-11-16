import { useState } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { Loader } from 'components/loader'

import { reCaptchaConfig } from 'const/reCaptcha'
import { useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'

import { Portal } from 'utils/portal'

import { LoginComponent } from './login'
import { RegistrationComponent } from './registration'
import { AuthContainer, AuthSection, AuthWrapper, Logo } from './styles'
import { ChangeAuthWay } from './сhangeAuthWay'

export const AuthPage = () => {
  const { isLoading } = useAppSelector(userInfoSelector)
  const [isLogin, setIsLogin] = useState(true)

  return (
    <GoogleReCaptchaProvider {...reCaptchaConfig}>
      <AuthSection>
        <AuthContainer>
          <Logo>Draw online</Logo>
          <AuthWrapper>
            {isLogin ? <LoginComponent /> : <RegistrationComponent />}
            <ChangeAuthWay isLogin={isLogin} setIsLogin={setIsLogin} />
            {isLoading && (
              <Portal>
                <Loader />
              </Portal>
            )}
          </AuthWrapper>
        </AuthContainer>
      </AuthSection>
    </GoogleReCaptchaProvider>
  )
}
