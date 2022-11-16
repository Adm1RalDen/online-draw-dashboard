import { useField } from 'formik'
import { FC } from 'react'

import { ErrorText } from 'components/error-text'
import { Input } from 'components/input'
import { Label } from 'styles/typography/styles'

import { InputTypes } from 'const/enums'

import { InputFieldWrapper } from './styles'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes
  name: string
  label?: string
  showError?: boolean
}

export const InputField: FC<InputFieldProps> = ({ showError = true, label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <InputFieldWrapper>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <Input isError={meta.error && meta.touched} {...field} {...props} />
      {showError && <ErrorText>{meta.touched && meta.error}</ErrorText>}
    </InputFieldWrapper>
  )
}
