import { HOME_URL } from './../const/urls'

export const redirectHome = (timer = 3000) =>
  setTimeout(() => {
    window.location.replace(HOME_URL)
  }, timer)
