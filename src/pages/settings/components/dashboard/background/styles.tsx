import styled from 'styled-components'

import { EditButton } from 'components/edit-button'
import { FlexVrWrapper } from 'components/flex'
import { Heading5 } from 'styles/typography/styles'

export const DashboardBackgroundWrapper = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`

export const DashboardAvatarWrapper = styled(FlexVrWrapper)`
  position: absolute;
  left: 30px;
  bottom: 0;
`

export const DashboardBackgroundImage = styled.img`
  width: 100%;
  height: 300px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.white};
`

export const DashboardAvatar = styled.img`
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.white};
`

export const DashboardEditButtton = styled(EditButton)`
  position: absolute;
  right: 10px;
  bottom: 40px;
`

export const DashboardModalWrapper = styled.div`
  width: 350px;
  position: relative;
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  display: grid;
  gap: 10px;

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

export const DashboardModalImage = styled.img`
  width: 100%;
`

export const DashboardModalTitle = styled(Heading5)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray};
`
