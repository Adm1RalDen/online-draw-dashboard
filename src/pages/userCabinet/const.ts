import * as yup from 'yup'

import { themes } from 'styles/themes'

import { AuthorizedUser } from 'types'

import { InitialStateTypes } from './types'

export const MALE = 'male'
export const WOMAN = 'woman'

const defaultUserValues = {
  name: '',
  country: '',
  city: '',
  color: themes.colors.black,
  gender: '',
  date: '',
  isUse2FA: false
}

const setInitialValues = (data: AuthorizedUser): InitialStateTypes => ({
  name: data.name,
  country: data.country,
  city: data.city,
  color: data.color,
  gender: data.gender,
  date: data.date,
  isUse2FA: data.isUse2FA
})

const validationSchema = yup.object().shape({
  name: yup.string().min(2, 'Min 2 symbols').max(25, 'Max 25 symbols'),
  country: yup.string(),
  city: yup.string(),
  color: yup.string(),
  gander: yup.string(),
  date: yup.date(),
  isUse2FA: yup.boolean()
})

const inputKeys = [
  'id',
  'role',
  'email',
  'biography',
  'avatar',
  'originalAvatar',
  'backgroundFon',
  'gender',
  'color',
  'date',
  'isUse2FA'
]

export { setInitialValues, validationSchema, defaultUserValues, inputKeys }
