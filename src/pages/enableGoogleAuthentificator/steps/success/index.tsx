import { SETTINGS_PRIVACY_URL } from 'const/urls'

/* eslint-disable-next-line */
import SuccessIcon from 'public/assets/success.svg'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heading4, Span } from 'styles/typography/styles'

import { Button } from 'components/button'

import { StepsProps } from '../types'
import { SuccessStepWrapper } from './styles'

export const SuccessQrCodeStep: FC<StepsProps> = () => {
  const navigate = useNavigate()
  const handleNavigate = () => navigate(SETTINGS_PRIVACY_URL, { replace: true })

  return (
    <SuccessStepWrapper>
      <Heading4>Authentificator is enabled</Heading4>
      <SuccessIcon />
      <Span>You succesfull enabled Authentificator for security your account</Span>
      <Button onClick={handleNavigate}> Back to security</Button>
    </SuccessStepWrapper>
  )
}