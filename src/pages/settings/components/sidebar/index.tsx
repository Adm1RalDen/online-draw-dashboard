import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'

import { Logo } from 'components/logo'

import { useAppDispatch } from 'store'
import { userLogoutThunk } from 'store/thunks/user/authorization.thunk'

import { SETTINGS_PAGE_NAVIGATION_LIST } from './const'
import { SettingsPageSideBarAside, SettingsPageSideBarLi } from './styles'

export const SettingsPageSideBar = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()

  const checkIsActiveLink = (link: string) => {
    const reg = new RegExp(`${link}`)
    return reg.test(location.pathname)
  }

  const handleLogOut = () => dispatch(userLogoutThunk())

  return (
    <SettingsPageSideBarAside>
      <Logo />
      <ul>
        {SETTINGS_PAGE_NAVIGATION_LIST.map((li) => (
          <SettingsPageSideBarLi key={li.name} isActive={checkIsActiveLink(li.link)}>
            {li.svgIcon}
            <span>{li.name}</span>
            <Link to={li.link} aria-label={li.name} />
          </SettingsPageSideBarLi>
        ))}
        <SettingsPageSideBarLi isActive={false} onClick={handleLogOut}>
          <ArrowLeftOnRectangleIcon /> <span>Log Out</span>
        </SettingsPageSideBarLi>
      </ul>
    </SettingsPageSideBarAside>
  )
}
