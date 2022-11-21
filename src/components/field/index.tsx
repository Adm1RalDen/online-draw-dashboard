import { useField } from 'formik'
import { FC } from 'react'

import { FieldWrapper } from 'components/field/field-wrapper'
import { Input } from 'components/input'
import { Label, Span } from 'styles/typography/styles'

import { TextInputFieldProps } from './types'

export const InputField: FC<TextInputFieldProps> = ({ subtitle, label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <FieldWrapper>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <Input isError={meta.error && meta.touched} {...props} {...field} />
      {subtitle && <Span>{subtitle}</Span>}
    </FieldWrapper>
  )
}
