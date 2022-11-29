import { PencilIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'

import { StyledEditButton } from './styles'

interface EditButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}

export const EditButton: FC<EditButtonProps> = ({ text = 'Edit', ...props }) => (
  <StyledEditButton {...props}>
    <PencilIcon />
    {text}
  </StyledEditButton>
)
