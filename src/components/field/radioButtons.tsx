import { useField } from 'formik'
import { FC } from 'react'

import { RadioButtons } from 'components/radioButtons'

import { FieldWrapper } from './field-wrapper'
import { RadioButtonsFieldProps } from './types'

export const RadioButtonsField: FC<RadioButtonsFieldProps> = ({
  label,
  subtitle,
  id,
  ...props
}) => {
  const [field] = useField(props)

  return (
    <FieldWrapper label={label} subtitle={subtitle} id={id}>
      <RadioButtons {...props} {...field} />
    </FieldWrapper>
  )
}
