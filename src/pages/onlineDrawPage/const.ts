import { AxiosError } from 'axios'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-toastify'

import { checkRoom } from 'api/rooms/checkRoom'

import { ErrorMessages } from 'const/enums'
import { JOIN_ACCESS_SOCKET } from 'const/sockets'
import { CHECK_ROOM_PASSWORD_URL, HOME_URL } from 'const/urls'

import { FunctionWithParams } from 'types'
import { SocketApp } from 'types/socket'

type Props = {
  setIsLoading: FunctionWithParams<boolean>
  setAccess: FunctionWithParams<boolean>
  roomId: string
  userId: string
  navigate: NavigateFunction
  socket: SocketApp
}

export const checkUserInRoom = async (data: Props) => {
  const { navigate, roomId, setIsLoading, userId, setAccess, socket } = data
  try {
    setIsLoading(true)
    const response = await checkRoom(roomId, userId)

    if (response.status === 200) {
      socket.emit(JOIN_ACCESS_SOCKET, { roomId, userId })
      setAccess(true)
    }

    setIsLoading(false)
    return true
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.response?.status === 409 || e.response?.status === 404) {
        toast.error(e.response?.data.message || ErrorMessages.OCCURED_ERROR)
        navigate(HOME_URL)
      } else {
        navigate(`${CHECK_ROOM_PASSWORD_URL}/${roomId}`)
      }
    }
  }
}
