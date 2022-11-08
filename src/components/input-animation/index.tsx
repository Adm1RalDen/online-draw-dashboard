import { FC } from 'react'

import { InputTypes } from 'const/enums'

import {
  AnimationInputErrorText,
  AnimationInputField,
  AnimationInputTitle,
  AnimationInputWrapper
} from './styles'

interface AnimationInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes
  label: string
  error?: string
}

export const AnimationInput: FC<AnimationInputProps> = ({ label, ...rest }) => (
  <AnimationInputWrapper isError={!!rest.error} hasValue={!!rest.value}>
    <AnimationInputField {...rest} />
    <AnimationInputTitle>{label}</AnimationInputTitle>
    <AnimationInputErrorText>{rest.error}</AnimationInputErrorText>
  </AnimationInputWrapper>
)
