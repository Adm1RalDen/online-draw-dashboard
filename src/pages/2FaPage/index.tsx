import { HOME_URL } from 'const/urls'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from 'store'
import { saveUserDataThunk } from 'store/thunks/user/authorization.thunk'
import { AuthResponse } from 'types'
import { Portal } from 'utils/portal'

import { User2FAComponent } from 'components/2FA'

import { TwoFactorPageSection } from './styles'

export const TwoFactorPage = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const handleCloseModal = () => location.replace(HOME_URL)
  const onSuccessLogin = (data: AuthResponse) => dispatch(saveUserDataThunk(data))

  const getUserId = useMemo(() => {
    const id = searchParams.get('userId')

    if (id) {
      return id
    }

    location.replace(HOME_URL)
  }, [searchParams])

  return (
    <TwoFactorPageSection>
      {getUserId && (
        <Portal>
          <User2FAComponent
            userId={getUserId}
            handleCloseModal={handleCloseModal}
            onSuccessCallback={onSuccessLogin}
          />
        </Portal>
      )}
    </TwoFactorPageSection>
  )
}
