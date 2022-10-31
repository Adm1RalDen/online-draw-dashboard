import { updateUserProfileThunk } from 'store/thunks/user/user.thunk'
import { AuthorizedUser } from 'types'
import { createBlobFile } from 'utils/encodeBase64'

import { SubmitParams } from './types'

export const handleSubmit = async (params: SubmitParams) => {
  const {
    backgroundFon,
    biography,
    userData,
    data,
    cropAvatar,
    originalAvatar,
    dispatch,
    handleEdit
  } = params

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
        formData.append(key, key === 'isUse2FA' ? String(chengedData[key]) : chengedData[key])
      }
    })

    formData.append('id', userData.id)

    dispatch(updateUserProfileThunk(formData))
  }

  handleEdit()
}
