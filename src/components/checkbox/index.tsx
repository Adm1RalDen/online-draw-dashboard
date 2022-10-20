import { FC } from 'react'

import { CheckBoxInput, CheckBoxLabel, Checkmark } from './styles'

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & { labelTitle: string }

export const Checkbox: FC<Props> = ({ labelTitle, ...params }) => (
  <CheckBoxLabel htmlFor={params.name}>
    {labelTitle}
    <CheckBoxInput {...params} />
    <Checkmark />
  </CheckBoxLabel>
)
