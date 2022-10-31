import { FunctionWithParams } from 'types'

export type RadioButtonsProps = {
  defaultValue: string
  values: string[]
  name: string
  onChange: FunctionWithParams<React.ChangeEvent<HTMLInputElement>>
}

export type RadioButtonProps = Omit<RadioButtonsProps, 'values'> & { value: string }
