import { usePaint } from 'hooks/usePaint'

import { CanvasWrapper } from './styles'

export const Canvas = () => {
  const { ref, handleSnapshot } = usePaint()

  return (
    <CanvasWrapper>
      <canvas onMouseUp={handleSnapshot} ref={ref}></canvas>
    </CanvasWrapper>
  )
}
