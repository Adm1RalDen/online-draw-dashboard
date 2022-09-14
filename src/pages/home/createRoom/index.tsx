import { useFormik } from 'formik'
import { useSocket } from 'hooks/useSocket'
import { FC } from 'react'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'
import { Heading3 } from 'styles/typography/styles'
import { FunctionWithParams } from 'types'

import { ErrorSpan } from 'components/error-span'

import { RoomInput, RoomInputWrapper, RoomWrapper, SubmitButton } from '../styles'
import { initialValues, onSubmit, validationSchema } from './const'

type ComponentProps = {
  isLoading: boolean
  setIsLoading: FunctionWithParams<boolean>
}

export const CreateRoomComponent: FC<ComponentProps> = ({ isLoading, setIsLoading }) => {
  const user = useAppSelector(userDataSelector)
  const { socket } = useSocket()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (data) =>
      onSubmit({ ...data, userId: user.id, userName: user.name }, setIsLoading, socket)
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
