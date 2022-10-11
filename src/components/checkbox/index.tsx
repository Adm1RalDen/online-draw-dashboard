import { FC } from 'react'

import { CheckBoxInput, CheckBoxLabel, CheckBoxWrapper } from './styles'

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & { lableTitle: string }

export const Checkbox: FC<Props> = ({ lableTitle, ...params }) => (
  <CheckBoxWrapper>
    <CheckBoxLabel htmlFor={params.name}>{lableTitle}</CheckBoxLabel>
    <CheckBoxInput {...params} type='checkbox' />
  </CheckBoxWrapper>
)
