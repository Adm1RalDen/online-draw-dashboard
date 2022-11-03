import { FC } from 'react'

import { CheckBoxInput, CheckBoxLabel, Checkmark } from './styles'
import { CheckBoxProps } from './types'

export const Checkbox: FC<CheckBoxProps> = ({ label, ...params }) => (
  <CheckBoxLabel htmlFor={params.name}>
    {label}
    <CheckBoxInput {...params} />
    <Checkmark />
  </CheckBoxLabel>
)
