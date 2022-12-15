import { useField } from 'formik'
import { FC } from 'react'

import { AnimatedInput } from 'components/animatedInput'
import { AnimatedInputProps } from 'components/animatedInput/types'

export const AnimatedInputField: FC<Omit<AnimatedInputProps, 'error'>> = (props) => {
  const [field, meta] = useField(props)

  const isError = meta.error && meta.touched

  return <AnimatedInput error={isError ? meta.error : ''} {...field} {...props} />
}
