import { useField } from 'formik'
import { FC } from 'react'

import { Input } from 'components/input'

import { FieldWrapper } from './field-wrapper'
import { TextInputFieldProps } from './types'

export const InputField: FC<TextInputFieldProps> = ({
  subtitle,
  label,
  maxWidth = false,
  onChange,
  ...props
}) => {
  const [field, { error, touched }] = useField(props)

  return (
    <FieldWrapper label={label} subtitle={subtitle} id={props.id}>
      <Input
        maxWidth={maxWidth}
        isError={error && touched}
        {...props}
        {...field}
        onChange={onChange ?? field.onChange}
      />
    </FieldWrapper>
  )
}
