import { Bars3Icon } from '@heroicons/react/24/outline'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { FlexVrWrapper } from 'components/flex'
import { Icon } from 'components/icon'
import { SearchInput } from 'components/search-input'

import { HOME_URL } from 'const/urls'
import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { getImageUrl } from 'utils/getImageUrl'

import { ChangeStateAction } from 'types'

import { SettingsPageHeaderWrapper } from './styles'

interface SettingsPageHeaderProps {
  isCollapsedNavigation: boolean
  toggleCollapseNavigation: ChangeStateAction<boolean>
}

export const SettingsPageHeader: FC<SettingsPageHeaderProps> = ({
  toggleCollapseNavigation,
  isCollapsedNavigation
}) => {
  const { avatar, name } = useAppSelector(userDataSelector)

  const toggleIsCollapsedNavigation = () => toggleCollapseNavigation((prev) => !prev)

  return (
    <SettingsPageHeaderWrapper isCollapsedNavigation={isCollapsedNavigation}>
      <Bars3Icon onClick={toggleIsCollapsedNavigation} />
      <SearchInput />
      <FlexVrWrapper>
        <Link to={HOME_URL}>Back home</Link>
        <Icon src={getImageUrl(avatar)} size={35} alt={name} />
      </FlexVrWrapper>
    </SettingsPageHeaderWrapper>
  )
}
