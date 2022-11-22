import { useField } from 'formik'
import { FC } from 'react'

import { FieldWrapper } from 'components/field/field-wrapper'
import { Input } from 'components/input'
import { Label, Span } from 'styles/typography/styles'

import { TextInputFieldProps } from './types'

export const InputField: FC<TextInputFieldProps> = ({ subtitle, label, ...props }) => {
  const [field, { error, touched }] = useField(props)

  return (
    <FieldWrapper>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <Input isError={error && touched} {...props} {...field} />
      {subtitle && <Span>{subtitle}</Span>}
    </FieldWrapper>
  )
}
