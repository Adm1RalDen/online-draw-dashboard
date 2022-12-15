import { useFormik } from 'formik'
import { FC } from 'react'

import { ErrorSpan } from 'components/error-span'
import { Heading3 } from 'styles/typography/styles'

import { JOIN_ROOM_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector, userNameSelector } from 'store/selectors/user.selector'

import { FunctionWithParams } from 'types'

import { RoomInput, RoomInputWrapper, RoomWrapper, SubmitButton } from '../styles'
import { initialValues } from './const'
import { validationSchema } from './utils'

interface EnterInRoomProps {
  isLoading: boolean
  setIsLoading: FunctionWithParams<boolean>
}

export const EnterInRoomComponent: FC<EnterInRoomProps> = ({ isLoading, setIsLoading }) => {
  const userId = useAppSelector(userIdSelector)
  const userName = useAppSelector(userNameSelector)

  const { socket } = useSocket()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      setIsLoading(true)
      socket.emit(JOIN_ROOM_SOCKET, { ...data, userId, userName })
    }
  })

  return (
    <RoomWrapper>
      <Heading3>Join to room</Heading3>
      <form onSubmit={formik.handleSubmit}>
        <RoomInputWrapper>
          <RoomInput
            isError={!!formik.errors.roomId}
            type='text'
            name='roomId'
            placeholder='Room id'
            value={formik.values.roomId}
            onChange={formik.handleChange}
            disabled={isLoading}
          />
          {formik.errors.roomId && <ErrorSpan title={formik.errors.roomId} />}
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
          Enter in room
        </SubmitButton>
      </form>
    </RoomWrapper>
  )
}
