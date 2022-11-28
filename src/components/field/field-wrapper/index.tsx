import { FC } from 'react'

import { Label, Span } from 'styles/typography/styles'

import { StyledFieldWrapper } from './styles'

export interface InputWrapperProps {
  label?: string
  subtitle?: string
  children: JSX.Element
  name: string
}

export const FieldWrapper: FC<InputWrapperProps> = ({ label, subtitle, children, name }) => (
  <StyledFieldWrapper>
    {label && <Label htmlFor={name}>{label}</Label>}
    {children}
    {subtitle && <Span>{subtitle}</Span>}
  </StyledFieldWrapper>
)
