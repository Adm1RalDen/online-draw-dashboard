import * as yup from 'yup'

import { ErrorMessages } from 'const/enums'
import { updateUserProfileThunk } from 'store/thunks/user/user.thunk'

import { createBlobFile } from 'utils/encodeBase64'

import { ChangedDataKeys, SubmitParams } from './types'

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
  const { userData, data, cropedAvatar, originalAvatar, dispatch } = params

  const changedData = {
    ...data,
    id: userData.id,
    avatar: cropedAvatar,
    originalAvatar
  }

  const keys = Object.keys(changedData) as (keyof ChangedDataKeys)[]

  const changedKeys = keys.filter((key) => changedData[key] !== userData[key])

  if (changedKeys.length) {
    const formData = new FormData()

    if (changedKeys.includes('avatar')) {
      const { originalAvatar, avatar } = changedData

      const avatarFile = await createBlobFile(avatar, 'avatar')

      if (originalAvatar && originalAvatar !== userData.originalAvatar) {
        const originalAvatarImage = await createBlobFile(originalAvatar, 'originalAvatar')

        formData.append('originalAvatar', originalAvatarImage)
      }

      formData.append('avatar', avatarFile)
    }

    changedKeys.forEach((key) => {
      if (key !== 'avatar' && key !== 'originalAvatar') {
        formData.append(key, changedData[key])
      }
    })

    formData.append('id', userData.id)

    dispatch(updateUserProfileThunk(formData))
  }
}
