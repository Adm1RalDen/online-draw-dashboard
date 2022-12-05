import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Input } from 'components/input'
import { Loader } from 'components/loader'

import { JOIN_ROOM_SOCKET } from 'const/sockets'
import { HOME_URL } from 'const/urls'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import {
  ConfirmAccessPage,
  ConfirmAccessPageButton,
  ConfirmAccessPageButtonsWrapper,
  ConfirmAccessPageInputWrapper,
  ConfirmAccessPageMain
} from './styles'
import { clearAccessPageConnection, setAccessPageConnection } from './utils'

export const PrivateRoom = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [roomPassword, setPassword] = useState('')

  const { id, name } = useAppSelector(userDataSelector)
  const { roomId = '' } = useParams()
  const { socket } = useSocket()

  const navigate = useNavigate()

  useEffect(() => {
    setAccessPageConnection({ socket, navigate, setIsLoading })
    return () => clearAccessPageConnection(socket)
  }, [navigate, socket])

  const handleEnter = async () => {
    if (roomId) {
      setIsLoading(true)

      socket.emit(JOIN_ROOM_SOCKET, {
        userName: name,
        roomPassword,
        userId: id,
        roomId
      })
    }
  }

  const handleHomeNavigate = () => navigate(HOME_URL)
  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  return (
    <ConfirmAccessPage>
      <ConfirmAccessPageMain>
        {isLoading ? (
          <Loader position='absolute' />
        ) : (
          <>
            <ConfirmAccessPageInputWrapper>
              <p>Please confirm room password</p>
              <Input
                type='password'
                placeholder='Room password'
                value={roomPassword}
                onChange={handleSetPassword}
              />
            </ConfirmAccessPageInputWrapper>
            <ConfirmAccessPageButtonsWrapper>
              <ConfirmAccessPageButton onClick={handleEnter}>Enter</ConfirmAccessPageButton>
              <ConfirmAccessPageButton onClick={handleHomeNavigate}>Back</ConfirmAccessPageButton>
            </ConfirmAccessPageButtonsWrapper>
          </>
        )}
      </ConfirmAccessPageMain>
    </ConfirmAccessPage>
  )
}
