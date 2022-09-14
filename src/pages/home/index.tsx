import { CABINET_URL } from 'const/urls'
import { useSocket } from 'hooks/useSocket'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'
import { UserLogoutThunk } from 'store/thunks/user/authorization.thunk'
import { Heading3 } from 'styles/typography/styles'
import { ActiveRoom } from 'types/rooms'
import { Portal } from 'utils/portal'

import { Loader } from 'components/loaders/loader'
import { Logo } from 'components/logo'

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
  const handleLogOut = () => UserLogoutThunk(dispatch)
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
              <UserCabinetButton onClick={handleNavigateCabinet} />
              <LogOutButton onClick={handleLogOut} />
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
          <Loader color='white' />
        </Portal>
      )}
    </>
  )
}
