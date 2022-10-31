import { ErrorMessages } from 'const/enums'
import { HOME_URL } from 'const/urls'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { saveUserInStorage } from 'services/token.service'

export const SuccessGoogleAuth = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const user = searchParams.get('user')

    if (user) {
      try {
        const userObject = JSON.parse(user)
        saveUserInStorage(userObject)
      } catch (e) {
        console.error(ErrorMessages.PARSING_ERROR)
      }
    }

    window.location.replace(HOME_URL)
  }, [searchParams])

  return null
}
