import { FC } from 'react'

import { CheckBoxInput, CheckBoxLabel, Checkmark } from './styles'

interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

export const Checkbox: FC<CheckBoxProps> = ({ label, ...params }) => (
  <CheckBoxLabel htmlFor={params.name}>
    {label}
    <CheckBoxInput {...params} />
    <Checkmark />
  </CheckBoxLabel>
)
