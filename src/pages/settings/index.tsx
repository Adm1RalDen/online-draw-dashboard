import { useEffect, useState } from 'react'
import { useOutlet } from 'react-router-dom'

import { Loader } from 'components/loader'

import { useAppDispatch, useAppSelector } from 'store'
import { userDataSelector, userInfoSelector } from 'store/selectors/user.selector'
import { getUserProfileThunk } from 'store/thunks/user/user.thunk'

import { SettingsPageHeader } from './components/header'
import { SettingsPageSideBar } from './components/sidebar'
import { SettingsPageContainer, SettingsPageMain, SettingsPageWrapper } from './styles'

export const SettingsPage = () => {
  const [isCollapsedSideBar, setIsCollapsedSideBar] = useState(true)
  const { isLoading } = useAppSelector(userInfoSelector)
  const { id } = useAppSelector(userDataSelector)
  const dispatch = useAppDispatch()
  const outlet = useOutlet()

  useEffect(() => {
    dispatch(getUserProfileThunk(id))
  }, [dispatch, id])

  return (
    <SettingsPageWrapper>
      <SettingsPageContainer isCollapsedSideBar={isCollapsedSideBar}>
        <SettingsPageSideBar />
        <SettingsPageMain>
          {isLoading ? (
            <Loader type='solid' />
          ) : (
            <>
              <SettingsPageHeader setIsCollapsedSideBar={setIsCollapsedSideBar} />
              {outlet}
            </>
          )}
        </SettingsPageMain>
      </SettingsPageContainer>
    </SettingsPageWrapper>
  )
}
