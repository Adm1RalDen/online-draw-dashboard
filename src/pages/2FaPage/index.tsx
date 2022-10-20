import { ErrorMessages } from 'const/enums'
import { HOME_URL } from 'const/urls'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useAppDispatch } from 'store'
import { saveUserDataThunk } from 'store/thunks/user/authorization.thunk'
import { Heading1 } from 'styles/typography/styles'
import { AuthResponse } from 'types'
import { Portal } from 'utils/portal'

import { User2FAComponent } from 'components/2FA'

import { TwoFactorPageSection } from './styles'

export const TwoFactorPage = () => {
  const [searchParams] = useSearchParams()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [userId, setUserId] = useState('')
  const [error, setError] = useState('')
  const dispatch = useAppDispatch()

  const handleCloseModal = () => location.replace(HOME_URL)
  const onSuccessLogin = (data: AuthResponse) => dispatch(saveUserDataThunk(data))

  useEffect(() => {
    const id = searchParams.get('userId')

    if (id) {
      setIsOpenModal(true)
      setUserId(id)
    } else {
      location.replace(HOME_URL)
    }
  }, [setIsOpenModal, searchParams])

  return (
    <TwoFactorPageSection>
      {error && (
        <div>
          <Heading1>{error || ErrorMessages.OCCURED_ERROR}</Heading1>
          <Link to={HOME_URL} replace>
            Come back home
          </Link>
        </div>
      )}
      {isOpenModal && (
        <Portal>
          <User2FAComponent
            userId={userId}
            handleCloseModal={handleCloseModal}
            onSuccessCallback={onSuccessLogin}
            onErrorCallback={setError}
          />
        </Portal>
      )}
    </TwoFactorPageSection>
  )
}
