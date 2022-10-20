import { ChangeEvent, FC } from 'react'
import { FunctionWithParams } from 'types'

import { Input, InputWrapper, Label, Span, Wrapper } from './styles'

type RadioButtonTypes = {
  defaultValue: string
  values: string[]
  name: string
  onChange: FunctionWithParams<ChangeEvent<HTMLInputElement>>
}

export const RadioButtons: FC<RadioButtonTypes> = ({ defaultValue, name, onChange, values }) => (
  <InputWrapper>
    {values.map((value, index) => (
      <Wrapper key={`${name}_${value}_${index}`}>
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
          <Span />
        </Label>
      </Wrapper>
    ))}
  </InputWrapper>
)
