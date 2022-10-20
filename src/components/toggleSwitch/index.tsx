import { FC, useState } from 'react'
import { noopFunction } from 'utils/noop'

import { ToggleSwitchInput, ToggleSwitchSpan, ToggleSwitchWrapper } from './styles'

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  isShowSpan?: boolean
}

export const ToggleSwitch: FC<Props> = ({
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
    <ToggleSwitchWrapper isChecked={isChecked}>
      <ToggleSwitchInput {...others} type='checkbox' onChange={handleChange} checked={isChecked} />
      {isShowSpan && (
        <ToggleSwitchSpan isChecked={isChecked}>{isChecked ? 'on' : 'off'}</ToggleSwitchSpan>
      )}
    </ToggleSwitchWrapper>
  )
}
