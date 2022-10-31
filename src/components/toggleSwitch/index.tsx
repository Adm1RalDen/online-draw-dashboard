import { FC, useState } from 'react'
import { noopFunction } from 'utils/noop'

import { Input, ToggleSwitchText, ToggleSwitchWrapper } from './styles'

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
      <Input {...others} type='checkbox' onChange={handleChange} checked={isChecked} />
      {isShowSpan && (
        <ToggleSwitchText isChecked={isChecked}>{isChecked ? 'on' : 'off'}</ToggleSwitchText>
      )}
    </ToggleSwitchWrapper>
  )
}
