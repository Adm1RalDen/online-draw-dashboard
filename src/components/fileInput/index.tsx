import { ChangeEvent, FC, useRef, useState } from 'react'

import {
  CloseDiv,
  ContentWrapper,
  FileInputStyled,
  FileName,
  LoadButton,
  SpanWrapper,
  Wrapper
} from './styles'
import { FileInputProps } from './types'

export const FileInput: FC<FileInputProps> = ({ onChange, name }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleClick = () => inputRef.current?.click()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null)
    onChange(e)
  }

  const handleClose = () => {
    setFile(null)
    onChange(null)
  }

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
      <FileInputStyled name={name} type='file' ref={inputRef} onChange={handleChange} />
    </ContentWrapper>
  )
}
