import styled from 'styled-components'

export const StyledIcon = styled.img`
  object-fit: cover;
  border-radius: 50%;
  aspect-ratio: 1/1;
  border: 2px solid white;
  background-color: ${({ theme }) => theme.colors.white};
`
