import { useEffect, useState } from 'react'
import { useOutlet } from 'react-router-dom'

import { Loader } from 'components/loader'

import { useAppDispatch, useAppSelector } from 'store'
import { userDataSelector, userInfoSelector } from 'store/selectors/user.selector'
import { getUserProfileThunk } from 'store/thunks/user/user.thunk'

import { SettingsPageHeader } from './components/header'
import { SettingsPageSideBar } from './components/sidebar'
import { SettingsPageContainer, SettingsPageMain, SettingsPageSection } from './styles'

export const SettingsPage = () => {
  const [isMobileAside, toggleMobileAside] = useState(true)
  const { isLoading } = useAppSelector(userInfoSelector)
  const { id } = useAppSelector(userDataSelector)
  const dispatch = useAppDispatch()
  const outlet = useOutlet()

  useEffect(() => {
    dispatch(getUserProfileThunk(id))
  }, [dispatch, id])

  return (
    <SettingsPageSection>
      <SettingsPageContainer isMobileAside={isMobileAside}>
        <SettingsPageSideBar />
        <SettingsPageMain>
          {isLoading ? (
            <Loader type='solid' />
          ) : (
            <>
              <SettingsPageHeader toggleMobileAside={toggleMobileAside} />
              {outlet}
            </>
          )}
        </SettingsPageMain>
      </SettingsPageContainer>
    </SettingsPageSection>
  )
}
