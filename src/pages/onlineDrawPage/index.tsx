import { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { Loader } from 'components/loader'

import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector } from 'store/selectors/user.selector'

import { ChildrenProps } from 'types'

import { checkUserInRoom } from './utils'

export const OnlineDrawPage: FC<ChildrenProps> = ({ children }) => {
  const [access, setAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { socket } = useSocket()
  const { state } = useLocation()
  const { roomId = '' } = useParams()

  const id = useAppSelector(userIdSelector)

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      checkUserInRoom({
        socket,
        roomId,
        userId: id,
        navigate,
        setAccess,
        setIsLoading
      })
    } else {
      setAccess(true)
    }
  }, [navigate, setIsLoading, setAccess, roomId, socket, state, id])

  if (isLoading) return <Loader position='absolute' />

  if (!access) return <div>You have not access</div>

  return children
}
