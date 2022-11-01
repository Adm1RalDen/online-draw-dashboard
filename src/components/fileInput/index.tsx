import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChangeEvent, FC, useRef, useState } from 'react'

import { FileTypes } from 'const/enums'

import { checkFileType } from 'utils/checkFileType'
import { isValidFileSize } from 'utils/isValidFileSize'

import { FileInputFileInfo, FileInputLabel, FileInputWrapper, StyledFileInput } from './styles'
import { FileInputProps } from './types'

export const FileInput: FC<FileInputProps> = ({ onChange, colorInfo, ...others }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const isValidType = checkFileType(e.target.files[0], [
        FileTypes.PNG,
        FileTypes.JPEG,
        FileTypes.JPG
      ])
      const isValidSize = isValidFileSize(e.target.files[0])

      if (!isValidSize || !isValidType) {
        e.target.value = ''
        setFile(null)
      } else {
        setFile(e.target.files[0])
        onChange(e)
      }
    }
  }

  const handleClose = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      setFile(null)
      onChange(null)
    }
  }

  return (
    <FileInputWrapper>
      <FileInputLabel>
        <ArrowUpTrayIcon />
        <StyledFileInput {...others} type='file' ref={inputRef} onChange={handleChange} />
        Upload
      </FileInputLabel>

      {file && (
        <>
          <FileInputFileInfo colorInfo={colorInfo}>
            <span>{file.name}</span>
            <XMarkIcon onClick={handleClose} />
          </FileInputFileInfo>
        </>
      )}
    </FileInputWrapper>
  )
}
