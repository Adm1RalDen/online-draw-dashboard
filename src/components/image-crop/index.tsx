import { FC, useState } from 'react'
import Avatar from 'react-avatar-edit'
import { toast } from 'react-toastify'

import { Button } from 'components/button'

import { DataSizes } from 'const/enums'

import { countBytes } from 'utils/countBytes'
import { EncodeBase64 } from 'utils/encodeBase64'

import { AvatarEditWrapper } from './styles'
import { ImageCropProps } from './types'

export const ImageCrop: FC<ImageCropProps> = ({
  fullImg,
  savedPreviewImg,
  height = 200,
  width = 300,
  handleSavePhoto
}) => {
  const [editMode, setEditMode] = useState(false)
  const [originalImg, setOriginalImage] = useState<string>('')
  const [cropedImg, setCropedImg] = useState<string>('')
  const [preview, setPreview] = useState<string>('')

  const onClose = () => setCropedImg('')
  const onCrop = (preview: string) => setCropedImg(preview)
  const onBeforeFileLoad = (elem: React.ChangeEvent<HTMLInputElement>) => {
    if (elem.target.files) {
      if (elem.target.files[0].size > countBytes(2, DataSizes.MB)) {
        toast.error('File is too big (should been less then 2Mb)')
        elem.target.value = ''
      }
    }
  }

  const onSave = () => {
    if (cropedImg) {
      handleSavePhoto(cropedImg, originalImg)
      setPreview(cropedImg)
      setEditMode(false)
    }
  }

  const onFileLoad = (file: React.ChangeEvent<HTMLInputElement> | File) => {
    if (file instanceof File) {
      EncodeBase64(file).then((res) => {
        setOriginalImage(res)
      })
    }
  }

  const handleEditModeOff = () => setEditMode(false)
  const handleEditModeOn = () => {
    setPreview('')
    setEditMode(true)
  }
  return (
    <AvatarEditWrapper>
      {editMode ? (
        <>
          <Avatar
            src={fullImg}
            width={width}
            height={height}
            onCrop={onCrop}
            onClose={onClose}
            label={'Choose Avatar'}
            onBeforeFileLoad={onBeforeFileLoad}
            onFileLoad={onFileLoad}
          />
          <div>
            <Button onClick={onSave} type='button'>
              save
            </Button>
            <Button onClick={handleEditModeOff} type='button'>
              cancel
            </Button>
          </div>
        </>
      ) : (
        <div>
          <img
            src={preview || savedPreviewImg || fullImg}
            width={120}
            height={120}
            className='image_default_styles'
          />
          <div>
            <Button onClick={handleEditModeOn} type='button'>
              Edit avatar
            </Button>
          </div>
        </div>
      )}
    </AvatarEditWrapper>
  )
}
