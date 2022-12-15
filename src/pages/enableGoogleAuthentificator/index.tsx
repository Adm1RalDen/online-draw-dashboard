import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AbsoluteIconWrapper } from 'components/absolute-icon-wrapper'
import { Container } from 'components/container'
import { Heading2 } from 'styles/typography/styles'

import { SETTINGS_SECURITY_URL } from 'const/urls'
import { useAppSelector } from 'store'
import { userIsUse2FaSelector } from 'store/selectors/user.selector'

import { AMOUNT_STEPS } from './const'
import { AuthentificatorSteps } from './steps'
import { SuccessQrCodeStep } from './steps/success'
import { AuthentificatorStepsPanel } from './stepsPanel'
import {
  EnableAuthentificatorSection,
  EnableAuthentificatorWrapper,
  SuccessEnableAuthentificatorWrapper
} from './styles'

export const EnableAuthentificator = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const isUse2FA = useAppSelector(userIsUse2FaSelector)

  const navigate = useNavigate()

  const handleNavigateToSettings = () => navigate(SETTINGS_SECURITY_URL, { replace: true })

  const handleDeclineStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleIncreaseStep = () => {
    if (currentStep < AMOUNT_STEPS) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  return (
    <EnableAuthentificatorSection>
      <Container>
        {isUse2FA && currentStep < AMOUNT_STEPS ? (
          <SuccessEnableAuthentificatorWrapper>
            <SuccessQrCodeStep />
          </SuccessEnableAuthentificatorWrapper>
        ) : (
          <EnableAuthentificatorWrapper>
            <Heading2>Enable Google Authentification</Heading2>
            <AuthentificatorStepsPanel currentStep={currentStep} />
            <AuthentificatorSteps
              currentStep={currentStep}
              handleIncreaseStep={handleIncreaseStep}
              handleDeclineStep={handleDeclineStep}
            />
            <AbsoluteIconWrapper>
              <XMarkIcon onClick={handleNavigateToSettings} />
            </AbsoluteIconWrapper>
          </EnableAuthentificatorWrapper>
        )}
      </Container>
    </EnableAuthentificatorSection>
  )
}
