import { useContext } from 'react'

import { ColorInput } from 'components/input/color'

import { PaintContext } from '../../context/paintContext'
import { Input, StyledSettings } from './styles'

export const SettingsBar = () => {
  const { changeStrokeStyle, changeLineWidth } = useContext(PaintContext)
  const handleChangeLineWidth = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeLineWidth(Number(e.target.value))
  const handleChangeStrokeStyle = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeStrokeStyle(e.target.value)

  return (
    <StyledSettings>
      <div>
        <label htmlFor='borderSize'>Border size</label>
        <Input
          min={1}
          type='number'
          id='borderSize'
          name='borderSize'
          defaultValue={1}
          onChange={handleChangeLineWidth}
        />
      </div>
      <div>
        <label htmlFor='borderColor'>Border color</label>
        <ColorInput
          type='color'
          id='borderColor'
          name='borderColor'
          onChange={handleChangeStrokeStyle}
        />
      </div>
    </StyledSettings>
  )
}
