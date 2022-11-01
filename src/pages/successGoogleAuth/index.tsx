import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Loader } from 'components/loader'

import { HOME_URL } from 'const/urls'

import { saveUserInStorage } from 'services/token.service'
import { jsonParse } from 'utils/jsonParse'

import { SavedUserObject } from 'types'

export const SuccessGoogleAuth = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const user = searchParams.get('user')

    if (user) {
      const userObject = jsonParse<SavedUserObject>(user)

      if (userObject) {
        saveUserInStorage(userObject)
      }
    }

    window.location.replace(HOME_URL)
  }, [searchParams])

  return <Loader position='absolute' />
}
