import styled from 'styled-components'

import { textOverflow } from 'styles/custom'

export const ActiveRoomWrapper = styled.div<{ isCurrentUserRoom: boolean }>`
  display: grid;
  align-items: center;
  grid-template-columns: 10px 1fr auto;
  gap: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.s};
  margin-top: ${({ theme }) => theme.spacing.s};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s;

  background-color: ${({ isCurrentUserRoom, theme: { colors } }) =>
    isCurrentUserRoom ? colors.greenLiteBackground : colors.darkSlateGray};
  box-shadow: 0px 0px 3px 1px
    ${({ isCurrentUserRoom, theme: { colors } }) =>
      isCurrentUserRoom ? colors.lightGray : colors.greenLiteBackground};

  &:hover {
    transform: scale(102%);
    background-color: ${({ theme }) => theme.colors.darkCyan};
    box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.whiteSmoke};
  }

  & > * {
    pointer-events: none;
  }

  & > h4 {
    ${textOverflow};
  }
`
