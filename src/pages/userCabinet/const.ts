import { themes } from 'styles/themes'
import { AuthorizedUser } from 'types'
import * as yup from 'yup'

import { InitialStateTypes } from './types'

export const MALE = 'male'
export const WOMAN = 'woman'

const defaultUserValues = {
  name: '',
  country: '',
  city: '',
  color: themes.colors.black,
  gender: '',
  date: ''
}

const setInitialValues = (data: AuthorizedUser): InitialStateTypes => ({
  name: data.name,
  country: data.country,
  city: data.city,
  color: data.color,
  gender: data.gender,
  date: data.date
})

const validationSchema = yup.object().shape({
  name: yup.string().min(2, 'Min 2 symbols').max(25, 'Max 25 symbols'),
  country: yup.string(),
  city: yup.string(),
  color: yup.string(),
  gander: yup.string(),
  date: yup.date()
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
  'age'
]

export { setInitialValues, validationSchema, defaultUserValues, inputKeys }
