import { FC } from 'react'

import { RadioButton } from './radioButton'
import { RadioButtonsWrapper } from './styles'
import { RadioButtonsProps } from './types'

export const RadioButtons: FC<RadioButtonsProps> = ({ values, ...data }) => (
  <RadioButtonsWrapper>
    {values.map((value, index) => (
      <RadioButton {...{ ...data, value }} key={`${data.name}_${value}_${index}`} />
    ))}
  </RadioButtonsWrapper>
)
