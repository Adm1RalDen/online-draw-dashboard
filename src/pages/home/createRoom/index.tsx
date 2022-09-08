import { useFormik } from 'formik'
import { useSocket } from 'hooks/useSocket'
import { FC } from 'react'
import { userDataSelector } from 'store/selectors/user.selector'
import { useAppSelector } from 'store/store'
import { Heading3 } from 'styles/typography/styles'
import { FunctionWithParams } from 'types'

import { ErrorOutput } from 'components/errorOutput'

import { RoomInput, RoomWrapper, SubmitButton } from '../styles'
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
        <div>
          <RoomInput
            type='text'
            name='roomName'
            placeholder='Room name'
            value={formik.values.roomName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isLoading}
          />
          {formik.errors.roomName && formik.touched.roomName && (
            <ErrorOutput>{formik.errors.roomName}</ErrorOutput>
          )}
        </div>
        <div>
          <RoomInput
            type='password'
            name='roomPassword'
            placeholder='Room password'
            value={formik.values.roomPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isLoading}
          />
        </div>
        <SubmitButton type='submit' disabled={isLoading || !formik.dirty}>
          Create room
        </SubmitButton>
      </form>
    </RoomWrapper>
  )
}
