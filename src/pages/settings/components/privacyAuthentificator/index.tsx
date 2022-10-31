import { useState } from 'react'

import { Heading2 } from 'styles/typography/styles'

import { PrivacyAuthentificatorContent } from '../privacyContent'
import { PrivacyAuthentificatorStepsPanel } from '../privacyStepsPanel'
import { PrivacyAuthentificatorWrapper } from './styles'

export const PrivacyAuthentificator = () => {
  const [currentStep, setCurrentStep] = useState(1)

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

  return (
    <PrivacyAuthentificatorWrapper>
      <Heading2>Enable Google Authentification</Heading2>
      <PrivacyAuthentificatorStepsPanel currentStep={currentStep} />
      <PrivacyAuthentificatorContent
        currentStep={currentStep}
        handleIncreaseStep={handleIncreaseStep}
        handleDeclineStep={handleDeclineStep}
      />
    </PrivacyAuthentificatorWrapper>
  )
}
