import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/button'
import { Heading4, Paragraph } from 'styles/typography/styles'

import SuccessIcon from 'public/assets/success.svg'

import { SETTINGS_SECURITY_URL } from 'const/urls'

import { SuccessStepWrapper } from './styles'

export const SuccessQrCodeStep: FC = () => {
  const navigate = useNavigate()
  const handleNavigate = () => navigate(SETTINGS_SECURITY_URL, { replace: true })

  return (
    <SuccessStepWrapper>
      <Heading4>Authentificator is enabled</Heading4>
      <SuccessIcon />
      <Paragraph>You succesfull enabled Authentificator for security your account</Paragraph>
      <Button onClick={handleNavigate}> Back to security</Button>
    </SuccessStepWrapper>
  )
}
