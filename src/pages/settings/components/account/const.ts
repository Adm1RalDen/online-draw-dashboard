import { themes } from 'styles/themes'

import { AuthorizedUser } from 'types'

import { InitialStateTypes } from './types'

export const setInitialValues = (data: AuthorizedUser): InitialStateTypes => ({
  name: data.name,
  country: data.country,
  city: data.city,
  color: data.color || themes.colors.black,
  gender: data.gender,
  date: data.date,
  biography: data.biography || ''
})

export const accountFieldsData = [
  {
    key: 'userName',
    name: 'name',
    label: 'Name',
    subtitle:
      'Your name may appear around DrawOnline where you contribute or are mentioned. You can remove it at any time.'
  },
  {
    key: 'userCity',
    name: 'city',
    label: 'City'
  },
  {
    key: 'userCountry',
    name: 'country',
    label: 'Country'
  }
]
