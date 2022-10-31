import { SETTINGS_URL } from 'const/urls'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'
import { Heading2 } from 'styles/typography/styles'

import { Container } from 'components/container'

import { AuthentificatorSteps } from './steps'
import { AuthentificatorStepsPanel } from './stepsPanel'
import { EnableAuthentificatorSection, EnableAuthentificatorWrapper } from './styles'

export const EnableAuthentificator = () => {
  const { isUse2FA } = useAppSelector(userDataSelector)
  const [currentStep, setCurrentStep] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    if (isUse2FA) {
      navigate(SETTINGS_URL)
    }
  }, [isUse2FA, navigate])

  const handleDeclineStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleIncreaseStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  if (isUse2FA) return null

  return (
    <EnableAuthentificatorSection>
      <Container>
        <EnableAuthentificatorWrapper>
          <Heading2>Enable Google Authentification</Heading2>
          <AuthentificatorStepsPanel currentStep={currentStep} />
          <AuthentificatorSteps
            currentStep={currentStep}
            handleIncreaseStep={handleIncreaseStep}
            handleDeclineStep={handleDeclineStep}
          />
        </EnableAuthentificatorWrapper>
      </Container>
    </EnableAuthentificatorSection>
  )
}
