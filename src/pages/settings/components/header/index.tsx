import { Bars3Icon } from '@heroicons/react/24/outline'
import { FC } from 'react'

import { SearchInput } from 'components/search-input'

import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { setImageUrl } from 'utils/setImageUrl'

import { ChangeStateAction } from 'types'

import { SettingsPageHeaderWrapper, UserIcon } from './styles'

interface SettingsPageHeaderProps {
  setIsCollapsedSideBar: ChangeStateAction<boolean>
}

export const SettingsPageHeader: FC<SettingsPageHeaderProps> = ({ setIsCollapsedSideBar }) => {
  const { avatar } = useAppSelector(userDataSelector)

  const handleChangeIsCollapsedSideBar = () => setIsCollapsedSideBar((prev) => !prev)

  return (
    <SettingsPageHeaderWrapper>
      <Bars3Icon onClick={handleChangeIsCollapsedSideBar} />
      <SearchInput />
      <UserIcon src={setImageUrl(avatar)} />
    </SettingsPageHeaderWrapper>
  )
}
