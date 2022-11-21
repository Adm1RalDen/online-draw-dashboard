import { useField } from 'formik'
import { FC } from 'react'

import { InputDate } from 'components/input/date'
import { Label, Span } from 'styles/typography/styles'

import { InputTypes } from 'const/enums'

import { FieldWrapper } from './field-wrapper'
import { InputFieldProps } from './types'

export const InputDateField: FC<InputFieldProps> = ({ label, subtitle, ...props }) => {
  const [field] = useField(props)

  return (
    <FieldWrapper>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <InputDate {...props} {...field} type={InputTypes.DATE} />
      {subtitle && <Span>{subtitle}</Span>}
    </FieldWrapper>
  )
}
