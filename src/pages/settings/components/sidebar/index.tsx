import { Link, useLocation } from 'react-router-dom'

import { SETTINGS_PAGE_NAVIGATION_LIST } from './const'
import { SettingsPageSideBarAside, SettingsPageSideBarLi } from './styles'

export const SettingsPageSideBar = () => {
  const location = useLocation()

  const checkIsActiveLink = (link: string) => {
    const reg = new RegExp(`${link}`)
    return reg.test(location.pathname)
  }

  return (
    <SettingsPageSideBarAside>
      <ul>
        {SETTINGS_PAGE_NAVIGATION_LIST.map((li) => (
          <SettingsPageSideBarLi key={li.name} isActive={checkIsActiveLink(li.link)}>
            {li.svgIcon}
            <Link to={li.link} aria-label={li.name} />
            {li.name}
          </SettingsPageSideBarLi>
        ))}
      </ul>
    </SettingsPageSideBarAside>
  )
}
