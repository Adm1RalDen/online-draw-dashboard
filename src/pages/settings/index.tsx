import { useEffect } from 'react'
import { useOutlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store'
import { userDataSelector, userInfoSelector } from 'store/selectors/user.selector'
import { getUserProfileThunk } from 'store/thunks/user/user.thunk'

import { LittleLoader } from 'components/loaders/littleLoader'

import { SettingsPageHeader } from './components/header'
import { SettingsPageSideBar } from './components/sidebar'
import { SettingsPageContainer, SettingsPageWrapper } from './styles'

export const SettingsPage = () => {
  const { isLoading } = useAppSelector(userInfoSelector)
  const { id } = useAppSelector(userDataSelector)
  const dispatch = useAppDispatch()
  const outlet = useOutlet()

  useEffect(() => {
    dispatch(getUserProfileThunk(id))
  }, [dispatch, id])

  return (
    <SettingsPageWrapper>
      <SettingsPageContainer>
        <SettingsPageHeader />
        <SettingsPageSideBar />
        <main>{isLoading ? <LittleLoader color='white' /> : outlet}</main>
      </SettingsPageContainer>
    </SettingsPageWrapper>
  )
}
