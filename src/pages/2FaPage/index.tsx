import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { User2FAComponent } from 'components/2FA'
import { Heading1 } from 'styles/typography/styles'

import { ErrorMessages } from 'const/enums'
import { HOME_URL } from 'const/urls'
import { useAppDispatch } from 'store'
import { saveUserDataThunk } from 'store/thunks/user/authorization.thunk'

import { Portal } from 'utils/portal'

import { AuthResponse, User2FAData } from 'types'

import { TwoFactorPageSection } from './styles'

export const TwoFactorPage = () => {
  const [searchParams] = useSearchParams()
  const [twoFactorData, setTwoFactorData] = useState<User2FAData | null>(null)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [error, setError] = useState('')
  const dispatch = useAppDispatch()

  const handleCloseModal = () => location.replace(HOME_URL)
  const onErrorCallback = setError
  const onSuccessLogin = (data: AuthResponse) => dispatch(saveUserDataThunk(data))

  useEffect(() => {
    const userId = searchParams.get('userId')
    const qrcode = searchParams.get('qrcode')

    if (userId && qrcode) {
      setIsOpenModal(true)
      setTwoFactorData({
        qrcode: qrcode.replace(/ /g, '+'),
        userId
      })
      setIsOpenModal(true)
    } else {
      location.replace(HOME_URL)
    }
  }, [setIsOpenModal, setTwoFactorData, searchParams])

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
      {isOpenModal && twoFactorData && (
        <Portal>
          <User2FAComponent
            qrcode={twoFactorData.qrcode}
            userId={twoFactorData.userId}
            handleCloseModal={handleCloseModal}
            onSuccessCallback={onSuccessLogin}
            onErrorCallback={onErrorCallback}
          />
        </Portal>
      )}
    </TwoFactorPageSection>
  )
}
