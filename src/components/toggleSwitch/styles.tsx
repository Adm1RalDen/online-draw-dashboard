import styled from 'styled-components'

export const ToggleSwitchWrapper = styled.div<{ isChecked: boolean }>`
  width: 80px;
  height: 40px;
  position: relative;
  z-index: 2;
  border: 3px solid ${({ theme }) => theme.colors.white};
  background-color: ${(p) =>
    p.isChecked ? p.theme.colors.darkSlateGray : p.theme.colors.darkCyan};
  border-radius: 30px;
  transition: 0.5s;
`

export const ToggleSwitchText = styled.span<{ isChecked: boolean }>`
  position: absolute;
  pointer-events: none;
  z-index: 3;
  height: 16px;
  transition: 0.3s;
  top: calc(50% - 8px);
  right: 10px;
`

export const ToggleSwitchInput = styled.input`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  appearance: none;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    top: calc(50% - 14px);
    left: 10px;
    z-index: 4;
    background-color: ${({ theme }) => theme.colors.darkCyan};
    border: 3px solid ${({ theme }) => theme.colors.white};
    transition: 0.5s;
  }

  &:checked {
    &::before {
      background-color: ${({ theme }) => theme.colors.darkSlateGray};
      transform: translateX(25px);
    }
  }
  &:checked {
    & + span {
      transform: translateX(-35px);
    }
  }
`
