import { FunctionWithParams } from 'types'

export interface RadioButtonsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue: string
  values: string[]
  name: string
  onChange: FunctionWithParams<React.ChangeEvent<HTMLInputElement>>
}

export interface RadioButtonProps extends Omit<RadioButtonsProps, 'values'> {
  value: string
}
