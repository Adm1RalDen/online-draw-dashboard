import { ChangeEvent, FC } from 'react'
import { FunctionWithParams } from 'types'

import { BackgroundCircle, Input, Label, RadioButton, RadioButtonsWrapper } from './styles'

type RadioButtonsType = {
  defaultValue: string
  values: string[]
  name: string
  onChange: FunctionWithParams<ChangeEvent<HTMLInputElement>>
}

export const RadioButtons: FC<RadioButtonsType> = ({ defaultValue, name, onChange, values }) => (
  <RadioButtonsWrapper>
    {values.map((value, index) => (
      <RadioButton key={`${name}_${value}_${index}`}>
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
      </RadioButton>
    ))}
  </RadioButtonsWrapper>
)
