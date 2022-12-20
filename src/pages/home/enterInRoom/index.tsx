import { Form, FormikProvider, useFormik } from 'formik'
import { FC } from 'react'

import { InputField } from 'components/field'
import { colors } from 'styles/colors'
import { Heading3 } from 'styles/typography/styles'

import { InputTypes } from 'const/enums'
import { JOIN_ROOM_SOCKET } from 'const/sockets'
import { useSocket } from 'hooks/useSocket'
import { useAppSelector } from 'store'
import { userIdSelector, userNameSelector } from 'store/selectors/user.selector'

import { FunctionWithParams } from 'types'

import { SubmitButton } from '../styles'
import { initialValues } from './const'
import { validationSchema } from './utils'

interface EnterInRoomProps {
  isLoading: boolean
  setIsLoading: FunctionWithParams<boolean>
}

export const EnterInRoomComponent: FC<EnterInRoomProps> = ({ isLoading, setIsLoading }) => {
  const userId = useAppSelector(userIdSelector)
  const userName = useAppSelector(userNameSelector)
  const socket = useSocket()

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (data) => {
      setIsLoading(true)
      socket.emit(JOIN_ROOM_SOCKET, { ...data, userId, userName })
    }
  })

  return (
    <>
      <Heading3 color={colors.white}>Join to room</Heading3>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <InputField
            type={InputTypes.TEXT}
            name='roomId'
            placeholder='Room id'
            disabled={isLoading}
          />

          <InputField
            type={InputTypes.PASSWORD}
            name='roomPassword'
            placeholder='Room password'
            disabled={isLoading}
          />

          <SubmitButton disabled={isLoading || (!formik.dirty && !formik.isValid)}>
            Enter in room
          </SubmitButton>
        </Form>
      </FormikProvider>
    </>
  )
}
