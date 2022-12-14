import { useField } from 'formik'
import { FC } from 'react'

import { Input } from 'components/input'

import { FieldWrapper } from './field-wrapper'
import { TextInputFieldProps } from './types'

export const InputField: FC<TextInputFieldProps> = ({ subtitle, label, onChange, ...props }) => {
  const [field, { error, touched }] = useField(props)

  return (
    <FieldWrapper label={label} subtitle={subtitle} name={props.name}>
      <Input
        isError={error && touched}
        {...props}
        {...field}
        onChange={onChange ?? field.onChange}
      />
    </FieldWrapper>
  )
}
