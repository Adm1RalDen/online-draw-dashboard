import { useFormik } from 'formik'
import { FC } from 'react'

import { ErrorSpan } from 'components/error-span'
import { Heading3 } from 'styles/typography/styles'

import { CREATE_ROOM_SOCKET, GET_USER_ROOMS_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector, userNameSelector } from 'store/selectors/user.selector'

import { ChangeStateAction } from 'types'

import { RoomInput, RoomInputWrapper, RoomWrapper, SubmitButton } from '../styles'
import { initialValues } from './const'
import { validationSchema } from './utils'

interface ComponentProps {
  isLoading: boolean
  setIsLoading: ChangeStateAction<boolean>
}

export const CreateRoomComponent: FC<ComponentProps> = ({ isLoading, setIsLoading }) => {
  const { socket } = useSocket()

  const userId = useAppSelector(userIdSelector)
  const userName = useAppSelector(userNameSelector)

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      setIsLoading(true)
      socket.emit(CREATE_ROOM_SOCKET, { ...data, userName, userId })
      socket.emit(GET_USER_ROOMS_SOCKET, { userId })
    }
  })

  return (
    <RoomWrapper>
      <Heading3>Create room</Heading3>
      <form onSubmit={formik.handleSubmit}>
        <RoomInputWrapper>
          <RoomInput
            type='text'
            name='roomName'
            placeholder='Room name'
            value={formik.values.roomName}
            onChange={formik.handleChange}
            disabled={isLoading}
            isError={!!formik.errors.roomName}
          />
          {formik.errors.roomName && <ErrorSpan title={formik.errors.roomName} />}
        </RoomInputWrapper>
        <div>
          <RoomInput
            isError={false}
            type='password'
            name='roomPassword'
            placeholder='Room password'
            value={formik.values.roomPassword}
            onChange={formik.handleChange}
            disabled={isLoading}
          />
        </div>
        <SubmitButton type='submit' disabled={isLoading || !formik.dirty || !formik.isValid}>
          Create room
        </SubmitButton>
      </form>
    </RoomWrapper>
  )
}
