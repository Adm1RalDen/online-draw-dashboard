import { HOME_URL } from 'const/urls'
import { useEffect } from 'react'
import { Heading1 } from 'styles/typography/styles'

import { FailedGoogleAuthPageSection } from './styles'

export const FailedGoogleAuthPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(HOME_URL)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <FailedGoogleAuthPageSection>
      <Heading1>Auth is failed</Heading1>
    </FailedGoogleAuthPageSection>
  )
}
