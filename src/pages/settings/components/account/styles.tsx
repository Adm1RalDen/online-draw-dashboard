import styled from 'styled-components'

import { Button } from 'components/button'
import { Input } from 'components/input'

export const AccountSettingsSection = styled.section`
  display: grid;
  grid-template: auto 1fr / minmax(200px, 650px) minmax(200px, auto);
  row-gap: 20px;
  column-gap: 40px;
  padding-bottom: ${({ theme }) => theme.spacing.large};

  @media ${({ theme }) => theme.devices.tablet} {
    grid-template: auto auto 1fr / 1fr;
  }
`
export const AccountSettingsForm = styled.form`
  grid-column: 1/2;
  grid-row: 2/3;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-row: 3/4;
  }
`

export const AccountSettingsField = styled(Input)`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.whiteSmoke};
`

export const AccountSettingsAvatarWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-column: 1/2;
  }
`

export const AccountSettingsFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const AccountSettingsSubmitButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.dodgerBlue};
`
