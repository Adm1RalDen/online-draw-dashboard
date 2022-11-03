import { FC } from 'react'

import { Input } from 'components/input'

import { ErrorText, InputWrapper } from './styles'
import { AnimationInputProps } from './types'

export const InputAnimation: FC<AnimationInputProps> = ({ label, ...rest }) => (
  <InputWrapper isError={!!rest.error} hasValue={!!rest.value} margin={rest.margin}>
    <Input {...rest} type={rest.type} />
    <label>{label}</label>
    {rest.error && <ErrorText title={rest.error}></ErrorText>}
  </InputWrapper>
)
