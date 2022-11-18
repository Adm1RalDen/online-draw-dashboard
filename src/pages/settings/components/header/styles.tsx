import styled from 'styled-components'

export const SettingsPageHeaderWrapper = styled.header`
  display: grid;
  grid-template: auto / auto minmax(100px, 200px) auto;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  & > svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`
