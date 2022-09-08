import { AppDispatch } from 'store/store'
import { updateUserProfileThunk } from 'store/thunks/user/user.thunk'
import { AuthorizedUser } from 'types'
import { createBlobFile } from 'utils/encodeBase64'
import * as yup from 'yup'

import { InitialStateTypes, UserCabinetTypes } from './types'

export const MALE = 'male'
export const WOMAN = 'woman'

const defaultUserValues = {
  name: '',
  country: '',
  city: '',
  age: '',
  color: '',
  gender: '',
  date: ''
}

const setInitialValues = (data: AuthorizedUser): InitialStateTypes => ({
  name: data.name,
  country: data.country,
  city: data.city,
  age: data.age,
  color: data.color,
  gender: data.gender,
  date: data.date
})

const validationSchema = yup.object().shape({
  name: yup.string().min(2, 'min 2'),
  age: yup.string(),
  country: yup.string(),
  city: yup.string(),
  color: yup.string(),
  gander: yup.string(),
  date: yup.date()
})

const inputKeys = ['id', 'role', 'email', 'biography', 'avatar', 'backgroundFon', 'gender', 'color']

const filterFields = (
  userFields: AuthorizedUser
): [keyof Omit<UserCabinetTypes, 'gender' | 'color'>, string][] => {
  const res = Object.entries(userFields).filter(([key]) => !inputKeys.includes(key)) as [
    keyof Omit<UserCabinetTypes, 'gender' | 'color'>,
    string
  ][]
  return res
}

const setInputTypes = (name: string) => {
  switch (name) {
    case 'date':
      return 'date'
    case 'age':
      return 'number'
    case 'color':
      return 'color'
    default:
      return 'text'
  }
}

const onSubmit = async (
  chenchedData: Omit<AuthorizedUser, 'role' | 'email'>,
  original: AuthorizedUser,
  dispatch: AppDispatch,
  handleEdit: VoidFunction
) => {
  const keys = Object.keys(chenchedData) as (keyof Omit<AuthorizedUser, 'role' | 'email'>)[]

  const filteredKeys = keys.filter((key) => {
    return chenchedData[key] !== original[key]
  })

  if (filteredKeys.length) {
    const formData = new FormData()
    const isAvatar = filteredKeys.includes('avatar')

    if (isAvatar) {
      const file = await createBlobFile(chenchedData.avatar, 'image', 'image/png')
      formData.append('avatar', file)
    }

    filteredKeys.map((key: keyof Omit<AuthorizedUser, 'role' | 'email'>) => {
      if (key === 'avatar') return
      formData.append(key, chenchedData[key])
    })

    formData.append('id', original.id)

    dispatch(updateUserProfileThunk(formData))
  }

  handleEdit()
}
export {
  setInitialValues,
  validationSchema,
  defaultUserValues,
  filterFields,
  setInputTypes,
  onSubmit
}
