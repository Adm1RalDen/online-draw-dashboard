import { useField } from 'formik'
import { FC } from 'react'

import { DateInput } from 'components/input/date'

import { InputTypes } from 'const/enums'

import { FieldWrapper } from './field-wrapper'
import { InputFieldProps } from './types'

export const DateInputField: FC<InputFieldProps> = ({ label, subtitle, ...props }) => {
  const [field] = useField(props)

  return (
    <FieldWrapper label={label} subtitle={subtitle} name={props.name}>
      <DateInput {...props} {...field} type={InputTypes.DATE} />
    </FieldWrapper>
  )
}
