import { FC } from 'react'
import { Heading6, Span } from 'styles/typography/styles'

import { PANEL_STEPS } from './const'
import {
  PrivacyStepsPanelCircle,
  PrivacyStepsPanelContainer,
  PrivacyStepsPanelWrapper
} from './styles'

type Props = {
  currentStep: number
}

export const PrivacyAuthentificatorStepsPanel: FC<Props> = ({ currentStep }) => (
  <PrivacyStepsPanelWrapper>
    {PANEL_STEPS.map(({ step, title }) => (
      <PrivacyStepsPanelContainer key={title}>
        <Heading6>{title}</Heading6>
        <PrivacyStepsPanelCircle data-step={step} isActive={currentStep >= step}>
          <Span>{step}</Span>
        </PrivacyStepsPanelCircle>
      </PrivacyStepsPanelContainer>
    ))}
  </PrivacyStepsPanelWrapper>
)
