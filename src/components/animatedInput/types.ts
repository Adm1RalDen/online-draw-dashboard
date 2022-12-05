import { InputTypes } from 'const/enums'

export interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes
  label: string
  name: string
  error?: string
}
