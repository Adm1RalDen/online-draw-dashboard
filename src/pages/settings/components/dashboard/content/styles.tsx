import styled from 'styled-components'

import { Heading4, Paragraph } from 'styles/typography/styles'

export const DashboardContentWrapper = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;

  & > div:last-of-type {
    min-height: 100px;
    flex-grow: 1;
    align-self: stretch;
  }

  @media ${({ theme }) => theme.devices.laptop} {
    align-items: stretch;
  }
`

export const PropertiesWrapper = styled.div`
  flex-grow: 1;
  min-width: 250px;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`

export const PropertiesTitle = styled(Heading4)`
  font-weight: 400;
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.colors.whiteGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`

export const PropertyWrapper = styled(Paragraph)`
  display: block;
  padding: ${({ theme: { spacing } }) => `${spacing.s} ${spacing.tiny}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`

export const PropertyText = styled.b`
  display: block;
  width: 250px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: ${({ theme }) => theme.spacing.tiny};
  padding: ${({ theme }) => theme.spacing.tiny};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`
