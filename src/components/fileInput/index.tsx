import { ChangeEvent, FC, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { FunctionWithParams } from 'types'
import { countBytes } from 'utils/countBytes'

import {
  CloseDiv,
  ContentWrapper,
  FileInputStyled,
  FileName,
  LoadButton,
  SpanWrapper,
  Wrapper
} from './styles'

type FileInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Required<{
    name: string
    onChange: FunctionWithParams<ChangeEvent<HTMLInputElement> | null>
  }>

export const FileInput: FC<FileInputProps> = ({ onChange, ...others }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files[0].size > countBytes(2, 'MB')) {
        e.target.value = ''
        toast.error('File is too big (should been less then 2Mb)')
        setFile(null)
      } else {
        setFile(e.target.files[0])
        onChange(e)
      }
    }
  }
  const handleClose = () => {
    setFile(null)
    onChange(null)
  }
  const handleClick = () => inputRef.current?.click()

  return (
    <ContentWrapper>
      <Wrapper>
        <LoadButton type='button' onClick={handleClick}>
          Load file
        </LoadButton>
        {file && (
          <SpanWrapper>
            <FileName>{file.name}</FileName>
            <CloseDiv onClick={handleClose}>x</CloseDiv>
          </SpanWrapper>
        )}
      </Wrapper>
      <FileInputStyled {...others} type='file' ref={inputRef} onChange={handleChange} />
    </ContentWrapper>
  )
}
