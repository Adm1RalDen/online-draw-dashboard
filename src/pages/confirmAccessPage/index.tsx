import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from 'components/button'
import { Input } from 'components/input'
import { Loader } from 'components/loader'
import { Paragraph } from 'styles/typography/styles'

import { JOIN_ROOM_SOCKET } from 'const/sockets'
import { HOME_URL } from 'const/urls'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector, userNameSelector } from 'store/selectors/user.selector'

import { Portal } from 'utils/portal'

import {
  ConfirmAccessPage,
  ConfirmAccessPageButtonsWrapper,
  ConfirmAccessPageWrapper
} from './styles'
import { clearAccessPageConnection, setAccessPageConnection } from './utils'

export const PrivateRoom = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { roomId = '' } = useParams()

  const socket = useSocket()
  const userId = useAppSelector(userIdSelector)
  const userName = useAppSelector(userNameSelector)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const navigate = useNavigate()

  useEffect(() => {
    setAccessPageConnection({ socket, navigate, setIsLoading })
    return () => clearAccessPageConnection(socket)
  }, [])

  const handleHomeNavigate = () => navigate(HOME_URL)
  const handleEnter = () => {
    if (roomId) {
      setIsLoading(true)

      socket.emit(JOIN_ROOM_SOCKET, {
        userId,
        roomId,
        userName,
        roomPassword: passwordRef.current?.value || ''
      })
    }
  }

  return (
    <>
      <ConfirmAccessPage>
        <ConfirmAccessPageWrapper>
          <Paragraph>Please confirm room password</Paragraph>
          <Input ref={passwordRef} type='password' placeholder='Room password' />

          <ConfirmAccessPageButtonsWrapper>
            <Button onClick={handleEnter}>Enter</Button>
            <Button onClick={handleHomeNavigate}>Back</Button>
          </ConfirmAccessPageButtonsWrapper>
        </ConfirmAccessPageWrapper>
      </ConfirmAccessPage>

      {isLoading && (
        <Portal>
          <Loader />
        </Portal>
      )}
    </>
  )
}
