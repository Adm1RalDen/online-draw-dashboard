import { useField } from 'formik'
import { FC } from 'react'

import { Input } from 'components/input'

import { InputTypes } from 'const/enums'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes
  name: string
}

export const InputField: FC<InputFieldProps> = (props) => {
  const [field, meta] = useField(props)

  return <Input isError={meta.error && meta.touched} {...field} {...props} />
}
