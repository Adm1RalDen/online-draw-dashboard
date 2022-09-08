import { FC } from 'react'

import { Input } from 'components/input'

import { ErrorSpan, InputWrapper } from './styles'

type InputProps = {
  margin?: string
  type: string
  label: string
  value: string
  name: string
  error?: string
  id?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  disabled?: boolean
}

export const InputAnimation: FC<InputProps> = ({ label, ...rest }) => {
  return (
    <InputWrapper isError={!!rest.error} hasValue={!!rest.value} margin={rest.margin}>
      <Input {...rest} type={rest.type} />
      <label>{label}</label>
      {rest.error && <ErrorSpan title={rest.error}></ErrorSpan>}
    </InputWrapper>
  )
}
