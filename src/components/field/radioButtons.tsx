import { useField } from 'formik'
import { FC } from 'react'

import { RadioButtons } from 'components/radioButtons'

import { FieldWrapper } from './field-wrapper'
import { RadioButtonsFieldProps } from './types'

export const RadioButtonsField: FC<RadioButtonsFieldProps> = ({ label, subtitle, ...props }) => {
  const [field] = useField(props)

  return (
    <FieldWrapper label={label} subtitle={subtitle} name={props.name}>
      <RadioButtons {...props} {...field} />
    </FieldWrapper>
  )
}
