import { HOME_URL } from 'const/urls'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Heading1 } from 'styles/typography/styles'

import { Loader } from 'components/loaders/loader'

import { ACTIVATION_PAGE_IS_ACTIVATED_TEXT, activationAccount } from './const'
import { ActivationPageSection } from './styles'

export const ActivationPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const { link } = useParams()

  useEffect(() => {
    activationAccount({ link: link as string, setIsLoading, setError })
  }, [link, setIsLoading, setError])

  return (
    <ActivationPageSection>
      {isLoading ? (
        <Loader color='white' position='absolute' />
      ) : (
        <>
          {error ? (
            <div>
              <Heading1>{error}</Heading1>
              <div>
                <Link to={HOME_URL} replace={true}>
                  Come back home
                </Link>
              </div>
            </div>
          ) : (
            <>
              <Heading1>{ACTIVATION_PAGE_IS_ACTIVATED_TEXT}</Heading1>
            </>
          )}
        </>
      )}
    </ActivationPageSection>
  )
}
