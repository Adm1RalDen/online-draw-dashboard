import { FC } from 'react'

import { Label, Span } from 'styles/typography/styles'

import { StyledFieldWrapper } from './styles'

export interface InputWrapperProps {
  label?: string
  subtitle?: string
  children: JSX.Element
  id: string
}

export const FieldWrapper: FC<InputWrapperProps> = ({ label, subtitle, children, id }) => (
  <StyledFieldWrapper>
    {label && <Label htmlFor={id}>{label}</Label>}
    {children}
    {subtitle && <Span>{subtitle}</Span>}
  </StyledFieldWrapper>
)
