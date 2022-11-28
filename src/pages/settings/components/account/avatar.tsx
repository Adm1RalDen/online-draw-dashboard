import isBase64 from 'is-base64'
import { FC, useMemo } from 'react'

import { ImageCrop } from 'components/image-crop'
import { Heading6 } from 'styles/typography/styles'

import { getImageUrl } from 'utils/getImageUrl'

import { AccountSettingsAvatarWrapper } from './styles'

interface AccountSettingsAvatarProps {
  cropedPicture: string
  originalPicture: string
  handleSavePictures: (cropedPicture: string, originalPicture: string) => void
}

export const AccountSettingsAvatar: FC<AccountSettingsAvatarProps> = ({
  cropedPicture,
  originalPicture,
  handleSavePictures
}) => {
  const originalAvatar = useMemo(
    () =>
      isBase64(originalPicture, { allowMime: true })
        ? originalPicture
        : getImageUrl(originalPicture),
    [originalPicture]
  )

  const cropedAvatar = useMemo(
    () =>
      isBase64(cropedPicture, { allowMime: true }) ? cropedPicture : getImageUrl(cropedPicture),
    [cropedPicture]
  )

  return (
    <AccountSettingsAvatarWrapper>
      <Heading6>Profile picture</Heading6>
      <ImageCrop
        fullPicture={originalAvatar}
        cropedPreview={cropedAvatar}
        handleSavePictures={handleSavePictures}
        width={350}
        height={250}
      />
    </AccountSettingsAvatarWrapper>
  )
}
