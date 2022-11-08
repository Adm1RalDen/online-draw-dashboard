export interface AnimationInputProps {
  margin?: string
  type: string
  label: string
  value: string
  name: string
  error?: string
  id?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  disabled?: boolean
}

export interface InputWrapperProps {
  isError: boolean
  hasValue: boolean
  margin?: string
}
