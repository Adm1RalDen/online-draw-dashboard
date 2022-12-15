import { useRef } from 'react'

import { useAppSelector } from 'store'
import { userIdSelector } from 'store/selectors/user.selector'

import { setConnection } from 'utils/socket'

import { SocketApp } from 'types/socket'

export const useConnection = (isAuth: boolean) => {
  const socket = useRef<SocketApp | null>(null)
  const userId = useAppSelector(userIdSelector)

  if (isAuth && socket.current === null && userId) {
    socket.current = setConnection(userId)
  }

  if (isAuth && socket.current?.disconnected) {
    socket.current.connect()
  }

  return socket.current
}
