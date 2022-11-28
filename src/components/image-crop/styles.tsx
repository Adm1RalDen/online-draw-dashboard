import styled from 'styled-components'

import { StyledIcon } from 'components/icon/styles'
import { Heading6 } from 'styles/typography/styles'

export const ImageCropWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing.s};
  display: flex;
  flex-direction: column;
  position: relative;
`

export const ImageCropEditWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  display: grid;
  grid-template: auto auto / 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.base};
    gap: 20px;
  }

  & > svg {
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`

export const ImageCropTitle = styled(Heading6)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray};
`

export const CroppedImageWrapper = styled.div`
  position: relative;
`

export const StyledCroppedImage = styled(StyledIcon)`
  box-shadow: 2px 2px 5px 1px ${({ theme }) => theme.colors.darkGray};
`

export const EditIconButton = styled.button`
  position: absolute;
  cursor: pointer;
  transition: all 0.3s;
  bottom: 15px;
  left: 5px;
  padding: ${({ theme }) => theme.spacing.tiny};
  width: 60px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  gap: 3px;

  &:active {
    background-color: ${({ theme }) => theme.colors.whiteGray};
  }
`
