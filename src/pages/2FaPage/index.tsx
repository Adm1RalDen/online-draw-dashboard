import { HOME_URL } from 'const/urls'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useAppDispatch } from 'store'
import { UserLoginThunk } from 'store/thunks/user/authorization.thunk'
import { Heading1 } from 'styles/typography/styles'
import { RefreshResponse, User2FAData } from 'types'
import { Portal } from 'utils/portal'

import { User2FAComponent } from 'components/2FA'

import { TwoFactorpageSection } from './styles'

export const TwoFactorpage = () => {
  const [searchParams] = useSearchParams()
  const [twoFactorData, setTwoFactorData] = useState<User2FAData | null>(null)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [error, setError] = useState('')
  const dispatch = useAppDispatch()

  const handleCloseModal = () => location.replace(HOME_URL)
  const onErrorCallback = (err: string) => setError(err)
  const onSuccessLogin = (data: RefreshResponse) => dispatch(UserLoginThunk(data))

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
      location.replace('/')
    }
  }, [setIsOpenModal, setTwoFactorData, searchParams])

  return (
    <TwoFactorpageSection>
      {error && (
        <div>
          <Heading1>{error || 'Occured error'}</Heading1>
          <Link to={HOME_URL} replace={true}>
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
    </TwoFactorpageSection>
  )
}
