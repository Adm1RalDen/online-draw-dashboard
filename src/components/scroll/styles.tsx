import styled from 'styled-components'

export const StyledScroll = styled.div`
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border-radius: 30px;
  }
`
