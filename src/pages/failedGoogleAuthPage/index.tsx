import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Heading1 } from 'styles/typography/styles'
import { redirectHome } from 'utils/redirectHome'

import { FailedGoogleAuthPageSection } from './styles'

export const FailedGoogleAuthPage = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const timer = redirectHome(5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <FailedGoogleAuthPageSection>
      <Heading1>{searchParams.get('error') || 'Auth is failed'}</Heading1>
    </FailedGoogleAuthPageSection>
  )
}
