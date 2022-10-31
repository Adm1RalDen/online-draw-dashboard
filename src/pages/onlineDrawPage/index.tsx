import { useSocket } from 'hooks/useSocket'
import { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'
import { ChildrenProps } from 'types'

import { Loader } from 'components/loader'

import { checkUserInRoom } from './const'

type ParamsProps = {
  roomId: string
}

export const OnlineDrawPage: FC<ChildrenProps> = ({ children }) => {
  const user = useAppSelector(userDataSelector)
  const { roomId } = useParams<ParamsProps>()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [access, setAccess] = useState(false)
  const { socket } = useSocket()
  const { state } = useLocation()

  useEffect(() => {
    if (!state) {
      checkUserInRoom({
        navigate,
        roomId: roomId as string,
        setIsLoading,
        userId: user.id,
        setAccess,
        socket
      })
    } else {
      setAccess(true)
    }
  }, [navigate, roomId, setIsLoading, user.id, setAccess, socket, state])

  if (isLoading) return <Loader position='absolute' />
  if (!access) return <div>You have not access</div>

  return <>{children}</>
}
