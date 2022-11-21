import { useField } from 'formik'
import { FC } from 'react'

import { RadioButtons } from 'components/radioButtons'
import { Label, Span } from 'styles/typography/styles'

import { FieldWrapper } from './field-wrapper'
import { RadioButtonsFieldProps } from './types'

export const RadioButtonsField: FC<RadioButtonsFieldProps> = ({ label, subtitle, ...props }) => {
  const [field] = useField(props)

  return (
    <FieldWrapper>
      {label && <Label>{label}</Label>}
      <RadioButtons {...props} {...field} />
      {subtitle && <Span>{subtitle}</Span>}
    </FieldWrapper>
  )
}
