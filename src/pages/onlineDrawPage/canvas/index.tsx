import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Canvas } from 'components/canvas'
import { SettingsBar } from 'components/settings'
import { Toolbar } from 'components/toolbar'

import { EXIT_SOCKET } from 'const/sockets'
import { useCanvas } from 'hooks/useCanvas/useCanvas.hook'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { PaintContext } from 'context/paintContext'

import { RoomUsers } from '../roomUsers'
import { CanvasSection, Layout } from './styles'

type ParamsProps = {
  roomId: string
}

export const OnlineCanvas = () => {
  const data = useCanvas()
  const user = useAppSelector(userDataSelector)
  const { roomId } = useParams<ParamsProps>()
  const { socket } = useSocket()

  const handleTabClosing = useCallback(
    (e: BeforeUnloadEvent) => {
      e.preventDefault()
      socket.emit(EXIT_SOCKET, {
        roomId: roomId as string,
        userId: user.id
      })
      e.returnValue = ''
      return ''
    },
    [socket, roomId, user.id]
  )

  useEffect(() => {
    window.addEventListener('beforeunload', handleTabClosing)
    return () => {
      window.removeEventListener('beforeunload', handleTabClosing)
      socket.emit(EXIT_SOCKET, {
        roomId: roomId as string,
        userId: user.id
      })
    }
  }, [handleTabClosing, socket, roomId, user.id])

  return (
    <CanvasSection>
      <PaintContext.Provider value={{ ...data }}>
        <Layout>
          <Toolbar />
          <SettingsBar />
          <Canvas />
          <RoomUsers />
        </Layout>
      </PaintContext.Provider>
    </CanvasSection>
  )
}
