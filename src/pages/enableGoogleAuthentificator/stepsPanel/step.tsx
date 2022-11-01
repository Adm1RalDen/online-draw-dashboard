import { FC } from 'react'

import { Heading6, Span } from 'styles/typography/styles'

import { StepsPanelCircle, StepsPanelContainer } from './styles'

type Props = {
  currentStep: number
  step: number
  title: string
}

export const Step: FC<Props> = ({ currentStep, step, title }) => (
  <StepsPanelContainer isActive={currentStep >= step}>
    <Heading6>{title}</Heading6>
    <StepsPanelCircle data-step={step}>
      <Span>{step}</Span>
    </StepsPanelCircle>
  </StepsPanelContainer>
)
