import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { REDIRECT_TO_ACTIVE_ROOM_SOCKET } from 'const/sockets'
import { DRAW_ONLINE_URL } from 'const/urls'
import { useAppSelector } from 'store'
import { userIdSelector, userIsAuthSelector } from 'store/selectors/user.selector'

import { setConnection } from 'utils/socket'

import { SocketApp } from 'types/socket'

export const useConnection = () => {
  const socket = useRef<SocketApp | null>(null)
  const isAuth = useAppSelector(userIsAuthSelector)
  const userId = useAppSelector(userIdSelector)

  const navigate = useNavigate()

  useEffect(() => {
    socket.current?.on(REDIRECT_TO_ACTIVE_ROOM_SOCKET, (roomId) => {
      navigate(`${DRAW_ONLINE_URL}/${roomId}`, { state: true })
    })

    return () => {
      socket.current?.off(REDIRECT_TO_ACTIVE_ROOM_SOCKET)
    }
  }, [])

  if (isAuth && socket.current === null && userId) {
    socket.current = setConnection(userId)
  }

  if (isAuth && socket.current?.disconnected) {
    socket.current.connect()
  }

  return socket.current
}
