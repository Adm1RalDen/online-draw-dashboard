import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Loader } from 'components/loader'
import { Heading1 } from 'styles/typography/styles'

import { HOME_URL } from 'const/urls'

import { ACTIVATION_PAGE_HOME_BUTTON_TEXT, ACTIVATION_PAGE_SUCCESS_TITLE } from './const'
import { ActivationPageSection } from './styles'
import { activationAccount } from './utils'

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
        <Loader position='absolute' />
      ) : (
        <>
          {error ? (
            <div>
              <Heading1>{error}</Heading1>
              <div>
                <Link to={HOME_URL} replace>
                  {ACTIVATION_PAGE_HOME_BUTTON_TEXT}
                </Link>
              </div>
            </div>
          ) : (
            <>
              <Heading1>{ACTIVATION_PAGE_SUCCESS_TITLE}</Heading1>
            </>
          )}
        </>
      )}
    </ActivationPageSection>
  )
}
