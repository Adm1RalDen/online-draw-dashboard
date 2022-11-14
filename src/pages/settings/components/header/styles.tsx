import styled from 'styled-components'

export const SettingsPageHeaderWrapper = styled.header`
  display: grid;
  grid-template: auto / auto minmax(100px, 200px) auto;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  & > svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`

export const UserIcon = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ theme }) => theme.colors.white};
`
