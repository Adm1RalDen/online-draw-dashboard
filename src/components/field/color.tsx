import { useField } from 'formik'
import { FC } from 'react'

import { InputColor } from 'components/input/color'
import { Label, Span } from 'styles/typography/styles'

import { InputTypes } from 'const/enums'

import { FieldWrapper } from './field-wrapper'
import { InputFieldProps } from './types'

export const InputColorField: FC<InputFieldProps> = ({ label, subtitle, ...props }) => {
  const [field] = useField(props)

  return (
    <FieldWrapper>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <InputColor {...props} {...field} type={InputTypes.COLOR} />
      {subtitle && <Span>{subtitle}</Span>}
    </FieldWrapper>
  )
}
