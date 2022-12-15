import {
  ArrowDownTrayIcon,
  ArrowLeftOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { MouseEvent } from 'react'
import { useParams } from 'react-router-dom'

import { ColorInput } from 'components/input/color'

import { DrawTools } from 'const/enums'
import { EXIT_SOCKET } from 'const/sockets'
import { usePaint } from 'hooks/usePaint'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector } from 'store/selectors/user.selector'

import { createBlobFile } from 'utils/encodeBase64'

import { TOOLS_LIST } from './const'
import { DrawToolsWrapper, SnapshotButtonsWrapper, StyledToolbar, ToolButton } from './styles'

export const Toolbar = () => {
  const { roomId = '' } = useParams()
  const { socket } = useSocket()

  const userId = useAppSelector(userIdSelector)

  const { setToolhandler, changeFillStyle, handleRedo, handleReset, snapshot, tool, canvas } =
    usePaint()

  const handleChangeFillStyle = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (canvas) {
      changeFillStyle(canvas.getContext('2d'), target.value)
    }
  }

  const handleChangeTool = ({ target }: MouseEvent) => {
    if (target instanceof HTMLButtonElement) {
      if (target.dataset.tool) {
        setToolhandler(target.dataset.tool as DrawTools)
      }
    }
  }

  const handleExitFromRoom = () => {
    socket.emit(EXIT_SOCKET, {
      roomId,
      userId
    })
  }

  const handleSavePhoto = async () => {
    if (snapshot) {
      const fileName = 'draw-online'
      const file = await createBlobFile(snapshot, fileName)
      const a = document.createElement('a')

      a.href = URL.createObjectURL(file)
      a.download = fileName
      a.click()
    }
  }

  return (
    <StyledToolbar>
      <DrawToolsWrapper onClick={handleChangeTool}>
        {TOOLS_LIST.map((elem) => (
          <ToolButton key={elem.id} data-tool={elem.name} active={tool === elem.name}>
            {elem.icon}
          </ToolButton>
        ))}
        <ColorInput name='color' onChange={handleChangeFillStyle} />
      </DrawToolsWrapper>

      <SnapshotButtonsWrapper>
        <ToolButton onClick={handleReset}>
          <ChevronLeftIcon />
        </ToolButton>
        <ToolButton onClick={handleRedo}>
          <ChevronRightIcon />
        </ToolButton>
        <ToolButton onClick={handleSavePhoto}>
          <ArrowDownTrayIcon />
        </ToolButton>
        <ToolButton onClick={handleExitFromRoom}>
          <ArrowLeftOnRectangleIcon />
        </ToolButton>
      </SnapshotButtonsWrapper>
    </StyledToolbar>
  )
}
