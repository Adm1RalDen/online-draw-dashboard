import styled, { keyframes } from 'styled-components'

type Props = {
  colorInfo: string | undefined
}

const animation = keyframes`
100%{
  left: 130px;
}
`

const FileInputWrapper = styled.div`
  width: max-content;
  height: fit-content;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
`

const FileInputLabel = styled.label`
  width: 120px;
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 1;
  line-height: 22px;
  position: relative;
  gap: 5px;
  border-radius: 5px;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.blue};
  transition: all 0.2s linear;
  cursor: pointer;

  & > svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.middleBlue};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }
`

const StyledFileInput = styled.input.attrs(() => ({ type: 'file' }))`
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const FileInputFileInfo = styled.div<Props>`
  max-width: 200px;
  padding: 10px 10px 0px 0px;
  overflow-x: hidden;
  position: absolute;
  white-space: nowrap;
  text-overflow: ellipsis;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  animation: 1s ${animation} forwards;
  color: ${(p) => (p.colorInfo ? p.colorInfo : 'inherit')};

  & > svg {
    color: ${(p) => (p.colorInfo ? p.colorInfo : 'inherit')};
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    width: 15px;
    height: 15px;
  }
`
export { StyledFileInput, FileInputWrapper, FileInputFileInfo, FileInputLabel }
