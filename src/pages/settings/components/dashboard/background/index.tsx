import { useState } from 'react'

import { Heading3 } from 'styles/typography/styles'

import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { getImageUrl } from 'utils/getImageUrl'

import { BackgroundEditModal } from './modal'
import {
  DashboardAvatar,
  DashboardAvatarWrapper,
  DashboardBackgroundImage,
  DashboardBackgroundWrapper,
  DashboardEditButtton
} from './styles'

export const DashboardBackground = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const userData = useAppSelector(userDataSelector)

  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)

  return (
    <DashboardBackgroundWrapper>
      <DashboardBackgroundImage src={getImageUrl(userData.backgroundFon)} alt={userData.name} />
      <DashboardAvatarWrapper>
        <DashboardAvatar
          src={getImageUrl(userData.avatar)}
          alt={userData.name}
          width={100}
          height={100}
        />
        <Heading3>{userData.name}</Heading3>
      </DashboardAvatarWrapper>
      <DashboardEditButtton onClick={handleOpenModal} />

      {isOpenModal && (
        <BackgroundEditModal handleCloseModal={handleCloseModal} userId={userData.id} />
      )}
    </DashboardBackgroundWrapper>
  )
}
