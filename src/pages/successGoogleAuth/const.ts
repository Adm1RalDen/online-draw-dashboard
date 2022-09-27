import { saveUserInStorage } from 'services/token.service'

export const checkGoogleAuthSearchParams = (userParams: string | null) => {
  if (userParams) {
    try {
      const userObject = JSON.parse(userParams)
      saveUserInStorage(userObject)
    } catch (e) {
      console.error('Parse Error')
    }
  }
  window.location.replace('/')
}
