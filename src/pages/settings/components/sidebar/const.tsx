import {
  ChatBubbleOvalLeftIcon,
  HomeIcon,
  LockClosedIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'

export const SETTINGS_PAGE_NAVIGATION_LIST = [
  { name: 'Dashboard', link: '/settings/dashboard', svgIcon: <HomeIcon /> },
  { name: 'Account', link: '/settings/account', svgIcon: <UserCircleIcon /> },
  { name: 'Security', link: '/settings/security', svgIcon: <LockClosedIcon /> },
  { name: 'Help', link: '/settings/help', svgIcon: <QuestionMarkCircleIcon /> },
  { name: 'Messages', link: '/settings/messages', svgIcon: <ChatBubbleOvalLeftIcon /> }
]
