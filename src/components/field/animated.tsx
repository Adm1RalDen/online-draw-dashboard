import { useField } from 'formik'
import { FC } from 'react'

import { AnimatedInput } from 'components/animatedInput'

import { InputTypes } from 'const/enums'

interface AnimatedInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes
  label: string
  name: string
}

export const AnimatedInputField: FC<AnimatedInputFieldProps> = (props) => {
  const [field, meta] = useField(props)

  const isError = meta.error && meta.touched

  return <AnimatedInput error={isError ? meta.error : ''} {...field} {...props} />
}