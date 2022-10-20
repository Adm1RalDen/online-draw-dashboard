import { FC } from 'react'
import styled, { css, keyframes } from 'styled-components'

type LoaderProps = {
  position?: 'absolute' | 'fixed'
  color?: 'white'
}

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoaderWrapper = styled.div<LoaderProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) =>
    p.position === 'fixed' &&
    css`
      position: fixed;
    `}
  ${(p) =>
    p.position === 'absolute' &&
    css`
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    `}

  & > div {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;

    & > div {
      display: block;
      position: absolute;
      width: inherit;
      height: inherit;
      border: 3px solid transparent;
      border-radius: 50%;
      animation: ${ldsRing} 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-top-color: ${(p) => (p.color ? p.theme.colors.white : p.theme.colors.black)};
    }
    & > div:nth-child(1) {
      animation-delay: -0.25s;
    }
    & > div:nth-child(2) {
      animation-delay: -0.1s;
    }
    & > div:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`
export const LittleLoader: FC<LoaderProps> = ({ position, color }) => (
  <LoaderWrapper position={position} color={color}>
    <div>
      <div />
      <div />
      <div />
      <div />
    </div>
  </LoaderWrapper>
)
