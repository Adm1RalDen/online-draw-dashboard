import * as yup from 'yup'

import { themes } from 'styles/themes'

import { ErrorMessages } from 'const/enums'
import { updateUserProfileThunk } from 'store/thunks/user/user.thunk'

import { createBlobFile } from 'utils/encodeBase64'

import { AuthorizedUser } from 'types/user'

import { InitialStateTypes, SubmitParams } from './types'

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Min 2 symbols')
    .max(25, 'Max 25 symbols')
    .required(ErrorMessages.REQUIRED),
  country: yup.string(),
  city: yup.string(),
  color: yup.string(),
  gander: yup.string(),
  date: yup.date()
})

export const handleSubmit = async (params: SubmitParams) => {
  const { userData, updatedUserData, cropedAvatar, originalAvatar, dispatch } = params

  const keys = Object.keys(updatedUserData) as (keyof InitialStateTypes)[]

  const changedKeys = keys.filter((key) => updatedUserData[key] !== userData[key])

  if (changedKeys.length || cropedAvatar) {
    const formData = new FormData()

    if (cropedAvatar && cropedAvatar !== userData.avatar) {
      const avatarFile = await createBlobFile(cropedAvatar, 'avatar')

      if (originalAvatar && originalAvatar !== userData.originalAvatar) {
        const originalAvatarFile = await createBlobFile(originalAvatar, 'originalAvatar')

        formData.append('originalAvatar', originalAvatarFile)
      }

      formData.append('avatar', avatarFile)
    }

    changedKeys.forEach((key) => {
      formData.append(key, updatedUserData[key])
    })

    formData.append('id', userData.id)

    dispatch(updateUserProfileThunk(formData))
  }
}

export const setInitialValues = (data: AuthorizedUser): InitialStateTypes => ({
  name: data.name,
  country: data.country,
  city: data.city,
  color: data.color || themes.colors.black,
  gender: data.gender,
  date: data.date,
  biography: data.biography || ''
})
