import { PencilIcon } from '@heroicons/react/24/outline'
import { FC, useState } from 'react'
import Avatar from 'react-avatar-edit'

import { Button } from 'components/button'
import { CloseIcon } from 'components/close-icon'
import { colors } from 'styles/colors'

import { EncodeBase64 } from 'utils/encodeBase64'
import { isValidFileSize } from 'utils/isValidFileSize'
import { Portal } from 'utils/portal'

import {
  CroppedImageWrapper,
  EditIconButton,
  ImageCropEditWrapper,
  ImageCropTitle,
  ImageCropWrapper,
  StyledCroppedImage
} from './styles'

interface ImageCropProps {
  fullPicture: string
  savedPreviewPicture: string
  width: number
  height: number
  handleSavePictures: (crop: string, originalImage: string) => void
}

export const ImageCrop: FC<ImageCropProps> = ({
  fullPicture,
  savedPreviewPicture,
  height = 250,
  width = 350,
  handleSavePictures
}) => {
  const [isOpenEditor, setIsOpenEditor] = useState(false)
  const [originalPicture, setOriginalPicture] = useState('')
  const [cropedPicture, setCropedPicture] = useState('')
  const [preview, setPreview] = useState('')

  const onCloseEditor = () => setCropedPicture('')
  const handleCloseEditor = () => setIsOpenEditor(false)
  const handleOpenEditor = () => setIsOpenEditor(true)

  const onBeforeFileLoad = (elem: React.ChangeEvent<HTMLInputElement>) => {
    if (elem.target.files) {
      const isValidSize = isValidFileSize(elem.target.files[0])

      if (!isValidSize) {
        elem.target.value = ''
      }
    }
  }

  const handleSave = () => {
    if (cropedPicture) {
      handleSavePictures(cropedPicture, originalPicture)
      setPreview(cropedPicture)
      setIsOpenEditor(false)
    }
  }

  const onPictureLoad = (file: React.ChangeEvent<HTMLInputElement> | File) => {
    if (file instanceof File) {
      EncodeBase64(file).then((res) => {
        setOriginalPicture(res)
      })
    }
  }

  return (
    <ImageCropWrapper>
      {isOpenEditor && (
        <Portal>
          <ImageCropEditWrapper>
            <ImageCropTitle>Crop your new profile picture</ImageCropTitle>
            <div>
              <Avatar
                src={fullPicture}
                imageWidth={width}
                width={width}
                height={height}
                shadingColor={colors.black}
                shadingOpacity={0.4}
                onCrop={setCropedPicture}
                onClose={onCloseEditor}
                label={'Click to choose picture'}
                onBeforeFileLoad={onBeforeFileLoad}
                onFileLoad={onPictureLoad}
                exportQuality={1}
              />

              <Button onClick={handleSave} type='button'>
                Set new profile picture
              </Button>
            </div>
            <CloseIcon onClick={handleCloseEditor} />
          </ImageCropEditWrapper>
        </Portal>
      )}
      <CroppedImageWrapper>
        <StyledCroppedImage
          src={preview || savedPreviewPicture || fullPicture}
          width={170}
          height={170}
        />

        <EditIconButton onClick={handleOpenEditor}>
          <PencilIcon width={15} height={15} />
          Edit
        </EditIconButton>
      </CroppedImageWrapper>
    </ImageCropWrapper>
  )
}
