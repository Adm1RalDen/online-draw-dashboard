import { useState } from 'react'
import { useOutlet } from 'react-router-dom'

import { Loader } from 'components/loader'

import { useAppSelector } from 'store'
import { userIsLoadingSelector } from 'store/selectors/user.selector'

import { SettingsPageHeader } from './components/header'
import { SettingsPageSideBar } from './components/sidebar'
import { SettingsPageContainer, SettingsPageMain, SettingsPageSection } from './styles'

export const SettingsPage = () => {
  const [isCollapsedNavigation, toggleCollapseNavigation] = useState(true)
  const isLoading = useAppSelector(userIsLoadingSelector)
  const outlet = useOutlet()

  return (
    <SettingsPageSection>
      <SettingsPageContainer isCollapsedNavigation={isCollapsedNavigation}>
        <SettingsPageSideBar />
        <SettingsPageMain>
          {isLoading ? (
            <Loader type='solid' />
          ) : (
            <>
              <SettingsPageHeader
                isCollapsedNavigation={isCollapsedNavigation}
                toggleCollapseNavigation={toggleCollapseNavigation}
              />
              {outlet}
            </>
          )}
        </SettingsPageMain>
      </SettingsPageContainer>
    </SettingsPageSection>
  )
}
