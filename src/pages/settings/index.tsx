import { useOutlet } from 'react-router-dom'

import { SettingsPageHeader } from './components/header'
import { SettingsPageSideBar } from './components/sidebar'
import { SettingsPageContainer, SettingsPageWrapper } from './styles'

export const SettingsPage = () => {
  const outlet = useOutlet()

  return (
    <SettingsPageWrapper>
      <SettingsPageContainer>
        <SettingsPageHeader />
        <SettingsPageSideBar />
        <main>{outlet}</main>
      </SettingsPageContainer>
    </SettingsPageWrapper>
  )
}
