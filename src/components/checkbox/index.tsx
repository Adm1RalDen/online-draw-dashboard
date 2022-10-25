import { FC } from 'react'

import { CheckBoxInput, CheckBoxLabel, Checkmark } from './styles'

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string }

export const Checkbox: FC<Props> = ({ label, ...params }) => (
  <CheckBoxLabel htmlFor={params.name}>
    {label}
    <CheckBoxInput {...params} />
    <Checkmark />
  </CheckBoxLabel>
)
