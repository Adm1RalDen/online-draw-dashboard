import styled from 'styled-components'

export const StyledScroll = styled.div`
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.teal.teal700};
    border-radius: 30px;
  }
`
