import { FC } from 'react'

import { CheckBoxInput, CheckBoxLabel, CheckBoxWrapper } from './styles'

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & { labelTitle: string }

export const Checkbox: FC<Props> = ({ labelTitle, ...params }) => (
  <CheckBoxWrapper>
    <CheckBoxLabel htmlFor={params.name}>{labelTitle}</CheckBoxLabel>
    <CheckBoxInput {...params} />
  </CheckBoxWrapper>
)
