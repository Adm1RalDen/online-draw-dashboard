import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Canvas } from 'components/canvas'
import { SettingsBar } from 'components/settings'
import { Toolbar } from 'components/toolbar'

import { EXIT_SOCKET } from 'const/sockets'
import { useCanvas } from 'hooks/useCanvas'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector } from 'store/selectors/user.selector'

import { PaintContext } from 'context/paintContext'

import { RoomUsers } from '../roomUsers'
import { CanvasSection, Layout } from './styles'

export const OnlineCanvas = () => {
  const { roomId = '' } = useParams()
  const { socket } = useSocket()

  const id = useAppSelector(userIdSelector)
  const data = useCanvas()

  const handleTabClosing = useCallback(
    (e: BeforeUnloadEvent) => {
      e.preventDefault()

      socket.emit(EXIT_SOCKET, {
        roomId,
        userId: id
      })

      e.returnValue = ''
      return ''
    },
    [socket, roomId, id]
  )

  useEffect(() => {
    window.addEventListener('beforeunload', handleTabClosing)

    return () => {
      window.removeEventListener('beforeunload', handleTabClosing)
      socket.emit(EXIT_SOCKET, {
        roomId: roomId,
        userId: id
      })
    }
  }, [handleTabClosing, socket, roomId, id])

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
