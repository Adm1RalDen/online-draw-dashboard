import { useFormik } from 'formik'
import { ChangeEvent, FC, useState } from 'react'
import { useAppDispatch } from 'store'
import { Heading3 } from 'styles/typography/styles'
import { Portal } from 'utils/portal'
import { setImageUrl } from 'utils/setImageUrl'

import { ErrorSpan } from 'components/error-span'
import { ImageCrop } from 'components/image-crop'
import { TextEditor } from 'components/textEditor'

import { filterFields, onSubmit, setInitialValues, setInputTypes, validationSchema } from '../const'
import { UserRadioButtons } from '../radioButtons'
import { UserCabinetTypes } from '../types'
import {
  AvatarWrapper,
  ButtonWrapper,
  Input,
  InputWrapper,
  UpdateProfileButton,
  UserForm
} from './styles'
import { UpdateUserModalTypes } from './types'

export const UpdateUserModal: FC<UpdateUserModalTypes> = ({ userData, handleEdit }) => {
  const dispatch = useAppDispatch()
  const [avatar, setAvatar] = useState(userData.avatar)
  const [biography, setBiography] = useState(userData.biography)
  const [cropAvatar, setCropAvatar] = useState(userData.avatar)
  const [backgroundFon, setBackgroundFon] = useState<File | string>(userData.backgroundFon)

  const handleSaveAvatar = (crop: string, originalImage: string) => {
    setCropAvatar(crop)
    setAvatar(originalImage)
  }
  const handleSaveBackground = (e: ChangeEvent<HTMLInputElement> | null) => {
    if (e === null) {
      setBackgroundFon(userData.backgroundFon)
    }
    e?.target?.files && setBackgroundFon(e.target.files[0])
  }

  const formik = useFormik({
    initialValues: setInitialValues(userData),
    onSubmit: (data) =>
      onSubmit(
        {
          ...data,
          id: userData.id,
          avatar: cropAvatar,
          backgroundFon,
          biography
        },
        userData,
        dispatch,
        handleEdit
      ),
    validationSchema,
    enableReinitialize: true
  })

  const userFields: [keyof Omit<UserCabinetTypes, 'color' | 'gender'>, string][] =
    filterFields(userData)

  return (
    <Portal>
      <UserForm onSubmit={formik.handleSubmit}>
        <AvatarWrapper>
          <Heading3>Avatar</Heading3>
          <ImageCrop
            image={setImageUrl(avatar)}
            width={350}
            height={220}
            handleSavePhoto={handleSaveAvatar}
          />
        </AvatarWrapper>

        {userFields.map(([key]: [keyof UserCabinetTypes, string]) => (
          <InputWrapper key={key}>
            <Input
              isError={!!(formik.errors[key] && formik.touched[key])}
              key={key}
              name={key}
              placeholder={key}
              type={setInputTypes(key)}
              value={formik.values[key]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors[key] && formik.touched[key] && <ErrorSpan title={formik.errors[key]} />}
          </InputWrapper>
        ))}

        <InputWrapper>
          <Input
            isError={!!(formik.errors.date && formik.touched.date)}
            name='date'
            type='date'
            placeholder='bithday'
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.date && formik.touched.date && <ErrorSpan title={formik.errors.date} />}
        </InputWrapper>

        <UserRadioButtons formik={formik} handleSaveBackground={handleSaveBackground} />
        <TextEditor name='biography' onChange={setBiography} value={biography} />
        <ButtonWrapper>
          <UpdateProfileButton type='submit'>Save</UpdateProfileButton>
          <UpdateProfileButton onClick={handleEdit}>Cancel</UpdateProfileButton>
        </ButtonWrapper>
      </UserForm>
    </Portal>
  )
}
