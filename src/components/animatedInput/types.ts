import { InputTypes } from 'const/enums'

export interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes
  label: string
  id: string
  name: string
  error?: string
}
