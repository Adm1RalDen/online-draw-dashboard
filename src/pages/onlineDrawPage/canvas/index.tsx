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

  const data = useCanvas()
  const socket = useSocket()
  const userId = useAppSelector(userIdSelector)

  const handleTabClosing = useCallback(
    (e: BeforeUnloadEvent) => {
      e.preventDefault()

      socket.emit(EXIT_SOCKET, {
        roomId,
        userId
      })

      e.returnValue = ''
      return ''
    },
    [socket, roomId, userId]
  )

  useEffect(() => {
    window.addEventListener('beforeunload', handleTabClosing)

    return () => {
      window.removeEventListener('beforeunload', handleTabClosing)
      socket.emit(EXIT_SOCKET, {
        roomId,
        userId
      })
    }
  }, [handleTabClosing, socket, roomId, userId])

  return (
    <CanvasSection>
      <PaintContext.Provider value={data}>
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
