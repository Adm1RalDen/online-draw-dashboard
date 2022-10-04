import {
  ArrowDownRightIcon,
  ArrowDownTrayIcon,
  ArrowLeftOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon
} from '@heroicons/react/24/outline'
import { EXIT_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'
import { MouseEvent, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'
import { ToolsTypes } from 'types/canvas'

import { Input } from 'components/input'

import CircleIcon from '../../../public/assets/circle.svg'
import EraserIcon from '../../../public/assets/eraser.svg'
import SquareIcon from '../../../public/assets/square.svg'
import { PaintContext } from '../../context/paintContext'
import { DrawToolsWrapper, SnapshotButtonsWrapper, StyledToolbar, ToolButton } from './styles'

export const Toolbar = () => {
  const { setToolhandler, tool, changeFillStyle, handleRedo, handleReset, snapshot } =
    useContext(PaintContext)
  const { roomId } = useParams()
  const { id } = useAppSelector(userDataSelector)
  const { socket } = useSocket()

  const handleChangeFillStyle = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeFillStyle(e.target.value)

  const handleChangeTool = (e: MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'BUTTON') {
      setToolhandler((e.target as HTMLButtonElement).dataset.tool as ToolsTypes)
    }
  }

  const handleExitFromRoom = () => {
    socket.emit(EXIT_SOCKET, {
      roomId: roomId || '',
      userId: id
    })
  }

  const handleSavePhoto = async () => {
    if (snapshot) {
      const res = await fetch(snapshot)
      const blob = await res.blob()
      const file = new File([blob], 'image', { type: 'image/png' })
      const a = document.createElement('a')
      a.href = URL.createObjectURL(file)
      a.download = 'image.png'
      a.click()
    }
  }

  return (
    <StyledToolbar>
      <DrawToolsWrapper onClickCapture={handleChangeTool}>
        <ToolButton data-tool='pen' active={tool === 'pen'}>
          <PencilIcon />
        </ToolButton>
        <ToolButton data-tool='square' active={tool === 'square'}>
          <SquareIcon />
        </ToolButton>
        <ToolButton data-tool='circle' active={tool === 'circle'}>
          <CircleIcon />
        </ToolButton>
        <ToolButton data-tool='eraser' active={tool === 'eraser'}>
          <EraserIcon />
        </ToolButton>
        <ToolButton data-tool='line' active={tool === 'line'}>
          <ArrowDownRightIcon />
        </ToolButton>
        <Input type='color' name='color' onChange={handleChangeFillStyle} />
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
