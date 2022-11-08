import styled, { css, keyframes } from 'styled-components'

import { Input } from 'components/input'
import { Label } from 'components/label'
import { Heading6, Span } from 'styles/typography/styles'

const errorAnimation = keyframes`
 0%{
  height: 0px;
 }
  100%{
    height: 20px;
  }
`

export const AnimationInputWrapper = styled(Label)<{ isError: boolean; hasValue: boolean }>`
  width: 100%;
  position: relative;
  margin: 15px 0px 10px 0px;

  ${(p) =>
    p.hasValue &&
    css`
      & > h6 {
        opacity: 0;
      }
    `}

  ${(p) =>
    !p.hasValue &&
    !p.isError &&
    css`
      & > input:focus {
        & + h6 {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    `}

  ${(p) =>
    !p.isError &&
    p.hasValue &&
    css`
      & > input {
        border: 2px solid ${({ theme }) => theme.colors.blue};
        caret-color: ${({ theme }) => theme.colors.blue};
      }

      & > h6 {
        color: ${({ theme }) => theme.colors.blue};
      }
    `}


  ${(p) =>
    p.isError &&
    css`
      & > input {
        border: 2px solid ${({ theme }) => theme.colors.red};
        caret-color: ${({ theme }) => theme.colors.red};
      }

      & > h6 {
        opacity: 1;
        color: ${({ theme }) => theme.colors.red};
        top: -20px;
        left: 0;
      }

      & > span {
        animation: 0.3s ${errorAnimation} forwards;
      }
    `}
`

export const AnimationInputTitle = styled(Heading6)`
  transition: all 0.3s;
  position: absolute;
  top: 12px;
  left: 10px;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.small};
`

export const AnimationInputField = styled(Input)`
  position: relative;
  border-radius: 5px;
  outline: none;

  &:-webkit-autofill {
    border: 2px solid ${({ theme }) => theme.colors.blue};
    caret-color: ${({ theme }) => theme.colors.blue};

    & + h6 {
      color: ${({ theme }) => theme.colors.blue};
      opacity: 1;
      top: -20px;
      left: 0;
    }
  }

  &:focus {
    & + h6 {
      opacity: 1;
      top: -20px;
      left: 0;
    }
  }

  &:disabled {
    & + h6 {
      pointer-events: none;
    }
  }
`

export const AnimationInputErrorText = styled(Span)`
  width: 100%;
  display: block;
  position: absolute;
  padding-top: 5px;
  text-align: right;
  overflow: hidden;
  transform: all 0.5s ease;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.red};
`
