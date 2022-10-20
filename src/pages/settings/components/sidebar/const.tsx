import { LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/outline'

export const SETTINGS_PAGE_NAVIGATION_LIST = [
  { name: 'Account', link: '/settings/account', svgIcon: <UserCircleIcon /> },
  { name: 'Privacy & Security', link: '/settings/privacy&security', svgIcon: <LockClosedIcon /> }
]
