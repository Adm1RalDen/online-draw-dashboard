import { FC } from 'react'
import { Heading6, Span } from 'styles/typography/styles'

import { PANEL_STEPS } from './const'
import { StepsPanelCircle, StepsPanelContainer, StepsPanelWrapper } from './styles'

type Props = {
  currentStep: number
}

export const AuthentificatorStepsPanel: FC<Props> = ({ currentStep }) => (
  <StepsPanelWrapper>
    {PANEL_STEPS.map(({ step, title }) => (
      <StepsPanelContainer key={title} isActive={currentStep >= step}>
        <Heading6>{title}</Heading6>
        <StepsPanelCircle data-step={step}>
          <Span>{step}</Span>
        </StepsPanelCircle>
      </StepsPanelContainer>
    ))}
  </StepsPanelWrapper>
)
