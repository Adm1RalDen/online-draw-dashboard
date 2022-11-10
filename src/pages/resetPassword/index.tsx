import { useOutlet } from 'react-router-dom'

import { Container } from 'components/container'

import { ResetPasswordContent } from './reset'
import { ResetPasswordSection } from './styles'

export const ResetPassword = () => {
  const outlet = useOutlet()

  return (
    <ResetPasswordSection>
      <Container>{outlet ? outlet : <ResetPasswordContent />}</Container>
    </ResetPasswordSection>
  )
}
