import { ArrowLeftOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonImage } from 'components/button-image'
import { Loader } from 'components/loader'
import { Logo } from 'components/logo'
import { Popper } from 'components/popper'
import { colors } from 'styles/colors'
import { Heading3 } from 'styles/typography/styles'

import { SETTINGS_URL } from 'const/urls'
import { useSocket } from 'hooks/useSocket'
import { useAppDispatch, useAppSelector } from 'store'
import { userIdSelector, userNameSelector } from 'store/selectors/user.selector'
import { userLogoutThunk } from 'store/thunks/user/authorization.thunk'

import { Portal } from 'utils/portal'

import { ActiveRoom } from 'types/rooms'

import { ActiveRooms } from './activeRooms'
import { Chat } from './chat'
import { CreateRoomComponent } from './createRoom'
import { EnterInRoomComponent } from './enterInRoom'
import {
  ActiveRoomsWrapper,
  ChatWrapper,
  HomeHeader,
  HomePageSection,
  HomePageWrapper,
  HomeWrapper,
  UserCabinetButton
} from './styles'
import { UserRooms } from './userRooms'
import { clearRoomsConnection, setRoomsConnection } from './utils'

export const HomePage = () => {
  const [activeRooms, setActiveRooms] = useState<ActiveRoom[]>([])
  const [userRooms, setUserRooms] = useState<ActiveRoom[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const userId = useAppSelector(userIdSelector)
  const userName = useAppSelector(userNameSelector)

  const socket = useSocket()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(userLogoutThunk())
    socket.disconnect()
  }

  const handleNavigateSettings = () => navigate(SETTINGS_URL)

  useEffect(() => {
    setRoomsConnection({
      userId,
      socket,
      navigate,
      setIsLoading,
      setUserRooms,
      setActiveRooms
    })

    return () => clearRoomsConnection(socket)
  }, [])

  return (
    <>
      <HomePageSection>
        <HomePageWrapper>
          <HomeHeader>
            <Logo />
            <div>
              <UserCabinetButton onClick={handleNavigateSettings}>
                <UserIcon />
              </UserCabinetButton>
              <Popper onAgree={handleLogOut} title='Are you shure to handle leave from app?'>
                <ButtonImage>
                  <ArrowLeftOnRectangleIcon />
                </ButtonImage>
              </Popper>
            </div>
          </HomeHeader>

          <ActiveRoomsWrapper>
            <Heading3 color={colors.white}>Active rooms</Heading3>
            <ActiveRooms activeRooms={activeRooms} userId={userId} />
          </ActiveRoomsWrapper>

          <HomeWrapper>
            <CreateRoomComponent isLoading={isLoading} setIsLoading={setIsLoading} />
            <EnterInRoomComponent isLoading={isLoading} setIsLoading={setIsLoading} />
          </HomeWrapper>

          <UserRooms
            userRooms={userRooms}
            userId={userId}
            userName={userName}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />

          <ChatWrapper>
            <Heading3 color={colors.white}>Chat</Heading3>
            <Chat />
          </ChatWrapper>
        </HomePageWrapper>
      </HomePageSection>

      {isLoading && (
        <Portal>
          <Loader />
        </Portal>
      )}
    </>
  )
}
