import { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { Loader } from 'components/loader'

import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector } from 'store/selectors/user.selector'

import { ChildrenProps } from 'types'

import { checkUserInRoom } from './utils'

export const OnlineDrawPage: FC<ChildrenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  const { socket } = useSocket()
  const { state } = useLocation()
  const { roomId = '' } = useParams()

  const userId = useAppSelector(userIdSelector)

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      setIsLoading(true)
      checkUserInRoom({
        socket,
        roomId,
        userId,
        navigate
      }).finally(() => {
        setIsLoading(true)
      })
    }
  }, [navigate, setIsLoading, roomId, socket, state, userId])

  if (isLoading) return <Loader position='absolute' />

  if (!state) return <div>You have not access</div>

  return children
}
