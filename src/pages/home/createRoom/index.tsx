import { Form, FormikProvider, useFormik } from 'formik'
import { FC } from 'react'

import { InputField } from 'components/field'
import { colors } from 'styles/colors'
import { Heading3 } from 'styles/typography/styles'

import { InputTypes } from 'const/enums'
import { CREATE_ROOM_SOCKET, GET_USER_ROOMS_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector, userNameSelector } from 'store/selectors/user.selector'

import { ChangeStateAction } from 'types'

import { SubmitButton } from '../styles'
import { initialValues } from './const'
import { validationSchema } from './utils'

interface ComponentProps {
  isLoading: boolean
  setIsLoading: ChangeStateAction<boolean>
}

export const CreateRoomComponent: FC<ComponentProps> = ({ isLoading, setIsLoading }) => {
  const socket = useSocket()
  const userId = useAppSelector(userIdSelector)
  const userName = useAppSelector(userNameSelector)

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (data) => {
      setIsLoading(true)
      socket.emit(CREATE_ROOM_SOCKET, { ...data, userName, userId })
      socket.emit(GET_USER_ROOMS_SOCKET, { userId })
    }
  })

  return (
    <>
      <Heading3 color={colors.white}>Create room</Heading3>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <InputField
            type={InputTypes.TEXT}
            name='roomName'
            placeholder='Room name'
            disabled={isLoading}
          />

          <InputField
            type={InputTypes.PASSWORD}
            name='roomPassword'
            placeholder='Room password'
            disabled={isLoading}
          />

          <SubmitButton type='submit' disabled={isLoading || (!formik.dirty && !formik.isValid)}>
            Create room
          </SubmitButton>
        </Form>
      </FormikProvider>
    </>
  )
}
