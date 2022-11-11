import { FC } from 'react'

import { InputTypes } from 'const/enums'

import {
  AnimatedInputErrorText,
  AnimatedInputStyledField,
  AnimatedInputTitle,
  AnimatedInputWrapper
} from './styles'

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes
  label: string
  error?: string
}

export const AnimatedInput: FC<AnimatedInputProps> = ({ label, ...rest }) => (
  <AnimatedInputWrapper isError={!!rest.error} hasValue={!!rest.value}>
    <AnimatedInputStyledField {...rest} />
    <AnimatedInputTitle>{label}</AnimatedInputTitle>
    <AnimatedInputErrorText>{rest.error}</AnimatedInputErrorText>
  </AnimatedInputWrapper>
)
