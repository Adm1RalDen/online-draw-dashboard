import { ArrowLeftOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Loader } from 'components/loader'
import { Logo } from 'components/logo'
import { Popper } from 'components/popper'
import { Heading3 } from 'styles/typography/styles'

import { CABINET_URL } from 'const/urls'
import { useSocket } from 'hooks/useSocket'
import { useAppDispatch, useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'
import { userLogoutThunk } from 'store/thunks/user/authorization.thunk'

import { Portal } from 'utils/portal'

import { ActiveRoom } from 'types/rooms'

import { ActiveRooms } from './activeRooms'
import { Chat } from './chat'
import { ClearRoomsConnection, SetRoomsConnection } from './const'
import { CreateRoomComponent } from './createRoom'
import { EnterInRoomComponent } from './enterInRoom'
import {
  ActiveRoomsWrapper,
  ChatWrapper,
  HomeHeader,
  HomePageSection,
  HomePageWrapper,
  LogOutButton,
  UserCabinetButton,
  Wrapper
} from './styles'
import { UserRooms } from './userRooms'

export const HomePage = () => {
  const { id, name } = useAppSelector(userDataSelector)
  const [isLoading, setIsLoading] = useState(false)
  const [activeRooms, setActiveRooms] = useState<ActiveRoom[]>([])
  const [userRooms, setUserRooms] = useState<ActiveRoom[]>([])
  const dispatch = useAppDispatch()
  const { socket } = useSocket()
  const navigate = useNavigate()

  const handleLogOut = () => dispatch(userLogoutThunk())
  const handleNavigateCabinet = () => navigate(CABINET_URL)

  useEffect(() => {
    SetRoomsConnection({
      navigate,
      setActiveRooms,
      setIsLoading,
      setUserRooms,
      socket,
      userId: id
    })
    return () => ClearRoomsConnection(socket)
  }, [navigate, setActiveRooms, setIsLoading, setUserRooms, socket, id])

  return (
    <>
      <HomePageSection>
        <HomePageWrapper>
          <HomeHeader>
            <Logo />
            <div>
              <UserCabinetButton onClick={handleNavigateCabinet}>
                <UserIcon />
              </UserCabinetButton>
              <Popper onAgreeAction={handleLogOut} title='Are you shure to handle leave from app?'>
                <LogOutButton>
                  <ArrowLeftOnRectangleIcon />
                </LogOutButton>
              </Popper>
            </div>
          </HomeHeader>

          <ActiveRoomsWrapper>
            <Heading3>Active rooms</Heading3>
            <ActiveRooms activeRooms={activeRooms} userId={id} />
          </ActiveRoomsWrapper>

          <Wrapper>
            <CreateRoomComponent isLoading={isLoading} setIsLoading={setIsLoading} />
            <EnterInRoomComponent isLoading={isLoading} setIsLoading={setIsLoading} />
          </Wrapper>

          <UserRooms
            userRooms={userRooms}
            userId={id}
            userName={name}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />

          <ChatWrapper>
            <Heading3>Chat</Heading3>
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
