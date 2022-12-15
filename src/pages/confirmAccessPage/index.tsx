import { useEffect, useRef, useState } from 'react'
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

  const { id, name } = useAppSelector(userDataSelector)
  const { roomId = '' } = useParams()
  const { socket } = useSocket()

  const passwordRef = useRef<HTMLInputElement | null>(null)

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
        roomPassword: passwordRef.current?.value || '',
        userId: id,
        roomId
      })
    }
  }

  const handleHomeNavigate = () => navigate(HOME_URL)

  return (
    <ConfirmAccessPage>
      <ConfirmAccessPageMain>
        {isLoading ? (
          <Loader position='absolute' />
        ) : (
          <>
            <ConfirmAccessPageInputWrapper>
              <p>Please confirm room password</p>
              <Input ref={passwordRef} type='password' placeholder='Room password' />
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
