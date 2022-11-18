import { Bars3Icon } from '@heroicons/react/24/outline'
import { FC } from 'react'

import { Icon } from 'components/icon'
import { SearchInput } from 'components/search-input'

import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { getImageUrl } from 'utils/getImageUrl'

import { ChangeStateAction } from 'types'

import { SettingsPageHeaderWrapper } from './styles'

interface SettingsPageHeaderProps {
  toggleCollapseNavigation: ChangeStateAction<boolean>
}

export const SettingsPageHeader: FC<SettingsPageHeaderProps> = ({ toggleCollapseNavigation }) => {
  const { avatar, name } = useAppSelector(userDataSelector)

  const toggleIsCollapsedNavigation = () => toggleCollapseNavigation((prev) => !prev)

  return (
    <SettingsPageHeaderWrapper>
      <Bars3Icon onClick={toggleIsCollapsedNavigation} />
      <SearchInput />
      <Icon src={getImageUrl(avatar)} size={35} alt={name} />
    </SettingsPageHeaderWrapper>
  )
}
