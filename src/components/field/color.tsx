import { useField } from 'formik'
import { FC } from 'react'

import { ColorInput } from 'components/input/color'

import { InputTypes } from 'const/enums'

import { FieldWrapper } from './field-wrapper'
import { InputFieldProps } from './types'

export const ColorInputField: FC<InputFieldProps> = ({ label, subtitle, ...props }) => {
  const [field] = useField(props)

  return (
    <FieldWrapper label={label} subtitle={subtitle} name={props.name}>
      <ColorInput {...props} {...field} type={InputTypes.COLOR} />
    </FieldWrapper>
  )
}
