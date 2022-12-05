import { FC } from 'react'

import {
  AnimatedInputErrorText,
  AnimatedInputStyledField,
  AnimatedInputTitle,
  AnimatedInputWrapper
} from './styles'
import { AnimatedInputProps } from './types'

export const AnimatedInput: FC<AnimatedInputProps> = ({ label, ...rest }) => (
  <AnimatedInputWrapper isError={!!rest.error} hasValue={!!rest.value}>
    <AnimatedInputStyledField {...rest} />
    <AnimatedInputTitle>{label}</AnimatedInputTitle>
    <AnimatedInputErrorText>{rest.error}</AnimatedInputErrorText>
  </AnimatedInputWrapper>
)
