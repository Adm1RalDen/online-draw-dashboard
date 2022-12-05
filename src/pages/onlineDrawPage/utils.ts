import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { checkRoom } from 'api/rooms/checkRoom'

import { ErrorMessages, NetworkStatus } from 'const/enums'
import { JOIN_ACCESS_SOCKET } from 'const/sockets'
import { CHECK_ROOM_PASSWORD_URL, HOME_URL } from 'const/urls'

import { CheckUserInRoomParams } from './types'

export const checkUserInRoom = async (data: CheckUserInRoomParams) => {
  const { navigate, setIsLoading, setAccess, roomId, userId, socket } = data

  try {
    setIsLoading(true)

    const response = await checkRoom(roomId, userId)

    if (response.status === NetworkStatus.SUCCESS) {
      socket.emit(JOIN_ACCESS_SOCKET, { roomId, userId })
      setAccess(true)
    }

    setIsLoading(false)

    return true
  } catch (e) {
    if (e instanceof AxiosError) {
      if (
        e.response?.status === NetworkStatus.CONFLICT ||
        e.response?.status === NetworkStatus.NOT_FOUND
      ) {
        toast.error(e.response?.data?.message || ErrorMessages.OCCURED_ERROR)
        navigate(HOME_URL)
      } else {
        navigate(`${CHECK_ROOM_PASSWORD_URL}/${roomId}`)
      }
    }
  }
}
