import isBase64 from 'is-base64'
import { FC } from 'react'

import { ImageCrop } from 'components/image-crop'
import { Heading6 } from 'styles/typography/styles'

import { getImageUrl } from 'utils/getImageUrl'

import { AccountSettingsAvatarWrapper } from './styles'

interface AccountSettingsAvatarProps {
  avatarSrc: string
  originalAvatarSrc: string
  handleSavePictures: (cropedPicture: string, originalPicture: string) => void
}

export const AccountSettingsAvatar: FC<AccountSettingsAvatarProps> = ({
  avatarSrc,
  originalAvatarSrc,
  handleSavePictures
}) => {
  const fullPicture = isBase64(originalAvatarSrc, { allowMime: true })
    ? originalAvatarSrc
    : getImageUrl(originalAvatarSrc)

  return (
    <AccountSettingsAvatarWrapper>
      <Heading6>Profile picture</Heading6>
      <ImageCrop
        fullPicture={fullPicture}
        savedPreviewPicture={getImageUrl(avatarSrc)}
        width={350}
        height={250}
        handleSavePictures={handleSavePictures}
      />
    </AccountSettingsAvatarWrapper>
  )
}
