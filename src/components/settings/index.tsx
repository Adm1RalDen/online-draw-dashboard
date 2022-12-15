import { ColorInput } from 'components/input/color'
import { Label } from 'styles/typography/styles'

import { usePaint } from 'hooks/usePaint'

import { Input, StyledSettings } from './styles'

export const SettingsBar = () => {
  const { canvas, changeStrokeStyle, changeLineWidth } = usePaint()

  const handleChangeLineWidth = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (canvas) {
      changeLineWidth(canvas.getContext('2d'), Number(target.value))
    }
  }

  const handleChangeStrokeStyle = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (canvas) {
      changeStrokeStyle(canvas.getContext('2d'), target.value)
    }
  }

  return (
    <StyledSettings>
      <div>
        <Label htmlFor='borderSize'>Border size</Label>
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
        <Label htmlFor='borderColor'>Border color</Label>
        <ColorInput id='borderColor' name='borderColor' onChange={handleChangeStrokeStyle} />
      </div>
    </StyledSettings>
  )
}
