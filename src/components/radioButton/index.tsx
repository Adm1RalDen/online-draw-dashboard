import { ChangeEvent, FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { FunctionWithParams } from 'types'

import { Input, InputWrapper, Label, Span, Wrapper } from './styles'

type RadioButtonTypes = {
  defaultValue: string
  values: string[]
  name: string
  onChange: FunctionWithParams<ChangeEvent<HTMLInputElement>>
}

export const RadioButtons: FC<RadioButtonTypes> = ({ defaultValue, name, onChange, values }) => {
  return (
    <InputWrapper>
      {values.map((value) => (
        <Wrapper key={uuidv4()}>
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
}
