import { useFormik } from 'formik'
import { ChangeEvent, FC, useMemo, useState } from 'react'
import { useAppDispatch } from 'store'
import { updateUserProfileThunk } from 'store/thunks/user/user.thunk'
import { Heading3 } from 'styles/typography/styles'
import { AuthorizedUser } from 'types'
import { createBlobFile } from 'utils/encodeBase64'
import { filterObject } from 'utils/filterObject'
import { Portal } from 'utils/portal'
import { setImageUrl } from 'utils/setImageUrl'
import { setInputTypes } from 'utils/setInputTypes'

import { ErrorSpan } from 'components/error-span'
import { ImageCrop } from 'components/image-crop'
import { TextEditor } from 'components/textEditor'

import { inputKeys, setInitialValues, validationSchema } from '../const'
import { UserRadioButtons } from '../radioButtons'
import { InitialStateTypes, UserCabinetTypes } from '../types'
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
  const [backgroundFon, setBackgroundFon] = useState<File | string>(userData.backgroundFon)
  const [originalAvatar, setOriginalAvatar] = useState(userData.originalAvatar)
  const [cropAvatar, setCropAvatar] = useState(userData.avatar)
  const [biography, setBiography] = useState(userData.biography)
  const dispatch = useAppDispatch()

  const avatarSrc = useMemo(
    () => `${userData.avatar}?id=${Math.floor(Math.random() * 1000)}`,
    /* eslint-disable-next-line */
    [cropAvatar]
  )
  const originalAvatarSrc = useMemo(
    () => `${userData.originalAvatar}?id=${Math.floor(Math.random() * 1000)}`,
    /* eslint-disable-next-line */
    [originalAvatar]
  )

  const handleSaveAvatar = (crop: string, originalImage: string) => {
    setCropAvatar(crop)
    setOriginalAvatar(originalImage)
  }

  const handleSaveBackground = (e: ChangeEvent<HTMLInputElement> | null) => {
    if (e === null) {
      setBackgroundFon(userData.backgroundFon)
    }
    e?.target?.files && setBackgroundFon(e.target.files[0])
  }

  const handleSubmit = async (data: InitialStateTypes) => {
    const chengedData = {
      ...data,
      id: userData.id,
      avatar: cropAvatar,
      originalAvatar,
      backgroundFon,
      biography
    }

    const keys = Object.keys(chengedData) as (keyof Omit<AuthorizedUser, 'role' | 'email'>)[]
    const filteredKeys = keys.filter((key) => {
      return chengedData[key] !== userData[key]
    })

    if (filteredKeys.length) {
      const formData = new FormData()
      const isAvatar = filteredKeys.includes('avatar')

      if (isAvatar) {
        const { originalAvatar, avatar } = chengedData
        const ext = avatar.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/) as RegExpMatchArray
        const avatarFile = await createBlobFile(chengedData.avatar, 'avatar', ext[0])
        formData.append('avatar', avatarFile)

        if (originalAvatar && originalAvatar !== userData.originalAvatar) {
          const originalAvatarImage = await createBlobFile(originalAvatar, 'originalAvatar', ext[0])
          formData.append('originalAvatar', originalAvatarImage)
        }
      }

      filteredKeys.forEach((key: keyof Omit<AuthorizedUser, 'role' | 'email'>) => {
        if (key !== 'avatar' && key !== 'originalAvatar') {
          formData.append(key, chengedData[key])
        }
      })

      formData.append('id', userData.id)

      dispatch(updateUserProfileThunk(formData))
    }

    handleEdit()
  }

  const formik = useFormik({
    initialValues: setInitialValues(userData),
    onSubmit: (data) => handleSubmit(data),
    validationSchema,
    enableReinitialize: true
  })

  const userFields = Object.entries(filterObject<AuthorizedUser>(userData, inputKeys)) as [
    keyof UserCabinetTypes,
    string
  ][]

  return (
    <Portal>
      <UserForm onSubmit={formik.handleSubmit}>
        <AvatarWrapper>
          <Heading3>Avatar</Heading3>
          <ImageCrop
            savedPreviewImg={setImageUrl(avatarSrc)}
            fullImg={setImageUrl(originalAvatarSrc)}
            width={350}
            height={220}
            handleSavePhoto={handleSaveAvatar}
          />
        </AvatarWrapper>

        {userFields.map(([key]) => (
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
