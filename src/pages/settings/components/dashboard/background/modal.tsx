import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { FC, useState } from 'react'

import { Button } from 'components/button'
import { FileInput } from 'components/fileInput'

import { Colors } from 'const/enums'
import { useAppDispatch } from 'store'
import { updateUserProfileThunk } from 'store/thunks/user/user.thunk'

import { Portal } from 'utils/portal'

import {
  BackgroundEditModalImage,
  BackgroundEditModalTitle,
  BackgroundEditModalWrapper
} from './styles'

interface DashboardModalProps {
  handleCloseModal: VoidFunction
  userId: string
}

export const BackgroundEditModal: FC<DashboardModalProps> = ({ handleCloseModal, userId }) => {
  const [backgroundUrl, setBackgroundUrl] = useState('')
  const [backgroundFile, setBackgroundFile] = useState<File | null>(null)

  const dispatch = useAppDispatch()

  const handleChangeBackground = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e?.target?.files) {
      setBackgroundUrl(URL.createObjectURL(e.target.files[0]))
      setBackgroundFile(e.target.files[0])
    }
  }

  const handleSaveBackground = () => {
    if (backgroundFile) {
      const formData = new FormData()

      formData.append('backgroundFon', backgroundFile)
      formData.append('id', userId)

      dispatch(updateUserProfileThunk(formData))
    }
  }

  return (
    <Portal>
      <BackgroundEditModalWrapper>
        <BackgroundEditModalTitle>Profile background</BackgroundEditModalTitle>
        {backgroundUrl && <BackgroundEditModalImage src={backgroundUrl} />}
        <FileInput
          name='backgroundFon'
          onChange={handleChangeBackground}
          colorInfo={Colors.BLACK}
        />
        {backgroundFile && (
          <Button onClick={handleSaveBackground}> Set new background picture</Button>
        )}
        <XMarkIcon width={20} height={20} onClick={handleCloseModal} />
      </BackgroundEditModalWrapper>
    </Portal>
  )
}
