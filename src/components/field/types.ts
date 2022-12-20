import { InputTypes } from 'const/enums'

import { RadioButtonsProps } from '../radioButtons/types'

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  label?: string
  subtitle?: string
}

export interface TextInputFieldProps extends InputFieldProps {
  type: InputTypes.EMAIL | InputTypes.PASSWORD | InputTypes.TEXT
}

export interface RadioButtonsFieldProps extends RadioButtonsProps {
  label?: string
  subtitle?: string
}
