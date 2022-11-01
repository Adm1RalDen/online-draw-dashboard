import { FC } from 'react'

import { BackgroundCircle, Input, Label, StyledRadioButton } from './styles'
import { RadioButtonProps } from './types'

export const RadioButton: FC<RadioButtonProps> = ({ defaultValue, name, value, onChange }) => (
  <StyledRadioButton>
    <Label htmlFor={`${name}_${value}`}>
      {value}
      <Input
        type='radio'
        id={`${name}_${value}`}
        name={name}
        value={value}
        defaultChecked={value === defaultValue}
        onChange={onChange}
      />
      <BackgroundCircle />
    </Label>
  </StyledRadioButton>
)
