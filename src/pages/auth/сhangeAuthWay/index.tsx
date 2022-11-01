import { FC } from 'react'

import { AuthButton, AuthParagraph } from './styles'

type Props = {
  isLogin: boolean
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChangeAuthWay: FC<Props> = ({ isLogin, setIsLogin }) => {
  const handleChangeToLogin = () => setIsLogin(true)
  const handleChangeToRegistration = () => setIsLogin(false)

  return (
    <>
      {isLogin ? (
        <AuthParagraph>
          Haven`t you an account yet?
          <AuthButton onClick={handleChangeToRegistration}>Sign up</AuthButton>
        </AuthParagraph>
      ) : (
        <AuthParagraph>
          Do you have an account? <AuthButton onClick={handleChangeToLogin}>Sign in</AuthButton>
        </AuthParagraph>
      )}
    </>
  )
}
