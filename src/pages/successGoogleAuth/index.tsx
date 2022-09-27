import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { checkGoogleAuthSearchParams } from './const'

export const SuccessGoogleAuth = () => {
  const [searchParams] = useSearchParams()
  useEffect(() => {
    checkGoogleAuthSearchParams(searchParams.get('user'))
  }, [searchParams])

  return null
}
