import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heading1, Heading3 } from 'styles/typography/styles'
import { Portal } from 'utils/portal'

import { Loader } from 'components/loaders/loader'

import {
  ACTIVATION_PAGE_BUTTON_TEXT,
  ACTIVATION_PAGE_HEADING_TITLE,
  ACTIVATION_PAGE_IS_ACTIVATED_TEXT,
  ACTIVATION_PAGE_TITLE,
  activationAccaunt,
  checkActivationLink
} from './const'
import { ActivationPageSection, ActivationPageWrapper, ConfirmButton } from './styles'

export const ActivationPage = () => {
  const [isShow, setIsShow] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { link } = useParams()

  useEffect(() => {
    checkActivationLink({ link: link as string, setIsShow: setIsShow })
  }, [setIsLoading, link])

  const handleActivationAccaunt = async () => {
    await activationAccaunt({ link: link as string, setIsLoading, setIsSuccess })
  }

  if (!isShow) return <Loader position='absolute' />
  return (
    <>
      {isLoading && (
        <Portal>
          <Loader color='white' position='absolute' />
        </Portal>
      )}
      <ActivationPageSection>
        {!isSuccess ? (
          <>
            <ActivationPageWrapper>
              <Heading1>{ACTIVATION_PAGE_TITLE}</Heading1>
              <Heading3>{ACTIVATION_PAGE_HEADING_TITLE}</Heading3>
              <ConfirmButton disabled={!!isLoading} onClick={handleActivationAccaunt}>
                {ACTIVATION_PAGE_BUTTON_TEXT}
              </ConfirmButton>
            </ActivationPageWrapper>
          </>
        ) : (
          <Heading1>{ACTIVATION_PAGE_IS_ACTIVATED_TEXT}</Heading1>
        )}
      </ActivationPageSection>
    </>
  )
}
