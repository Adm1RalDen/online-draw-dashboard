import { FC, useState } from 'react'
import { noopFunction } from 'utils/noop'

import { ToggleInput, ToggleSpan, ToggleWrapper } from './styles'

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  isShowSpan?: boolean
}

export const Toggle: FC<Props> = ({
  isShowSpan = true,
  checked = false,
  onChange = noopFunction,
  ...others
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onChange(e)
  }

  return (
    <ToggleWrapper isChecked={isChecked}>
      <ToggleInput {...others} type='checkbox' onChange={handleChange} checked={isChecked} />
      {isShowSpan && <ToggleSpan isChecked={isChecked}>{isChecked ? 'on' : 'off'}</ToggleSpan>}
    </ToggleWrapper>
  )
}
