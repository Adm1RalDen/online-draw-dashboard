import { FC } from 'react'

import { PANEL_STEPS } from './const'
import { Step } from './step'
import { StepsPanelWrapper } from './styles'

type Props = {
  currentStep: number
}

export const AuthentificatorStepsPanel: FC<Props> = ({ currentStep }) => (
  <StepsPanelWrapper>
    {PANEL_STEPS.map(({ step, title }) => (
      <Step {...{ currentStep, step, title }} key={title} />
    ))}
  </StepsPanelWrapper>
)
