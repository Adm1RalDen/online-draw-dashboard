import { HOME_URL } from 'const/urls'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from 'store'
import { setAttemptsLeftCountAction } from 'store/slices/twoFa.slice'
import { saveUserDataThunk } from 'store/thunks/user/authorization.thunk'
import { AuthResponse } from 'types'
import { decodeFromBase64 } from 'utils/decodeFromBase64'
import { jsonParse } from 'utils/jsonParse'
import { Portal } from 'utils/portal'

import { User2FAComponent } from 'components/2FA'

import { TwoFactorPageSection } from './styles'
import { TwoFAUserDataType } from './types'

export const TwoFactorPage = () => {
  const [userId, setUserId] = useState<null | string>(null)
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const data = searchParams.get('data')

    if (data) {
      const decodedData = decodeFromBase64(data)

      if (decodedData) {
        const userData = jsonParse<TwoFAUserDataType>(decodedData)

        if (userData) {
          setUserId(userData.userId)
          dispatch(setAttemptsLeftCountAction(userData.attemptsLeftCount))
        }
      }
    } else {
      location.replace(HOME_URL)
    }
  }, [searchParams, dispatch])

  const handleCloseModal = () => location.replace(HOME_URL)
  const onSuccessLogin = (data: AuthResponse) => dispatch(saveUserDataThunk(data))

  return (
    <TwoFactorPageSection>
      {userId && (
        <Portal>
          <User2FAComponent
            userId={userId}
            handleCloseModal={handleCloseModal}
            onSuccessCallback={onSuccessLogin}
          />
        </Portal>
      )}
    </TwoFactorPageSection>
  )
}
