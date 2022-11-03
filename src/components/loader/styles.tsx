import styled, { keyframes } from 'styled-components'

import { LoaderProps } from './types'

export const StyledLoaderWrapper = styled.div<Omit<LoaderProps, 'isLoading' | 'type'>>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(p) => (p.position ? p.position : 'static')};
`

const lds_ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const lds_ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  } 
  100% {
    transform: translate(24px, 0);
  }
`

const lds_ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const StyledDotsLoader = styled.div<Omit<LoaderProps, 'isLoading' | 'type'>>`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & > div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: ${(p) => (p.color ? p.color : p.theme.colors.white)};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & > div:nth-child(1) {
    left: 8px;
    animation: ${lds_ellipsis1} 0.6s infinite;
  }
  & > div:nth-child(2) {
    left: 8px;
    animation: ${lds_ellipsis2} 0.6s infinite;
  }
  & > div:nth-child(3) {
    left: 32px;
    animation: ${lds_ellipsis2} 0.6s infinite;
  }
  & > div:nth-child(4) {
    left: 56px;
    animation: ${lds_ellipsis3} 0.6s infinite;
  }
`

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const StyledSolidLoader = styled.div<Omit<LoaderProps, 'isLoading' | 'type'>>`
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
    border-top-color: ${(p) => (p.color ? p.color : p.theme.colors.white)};
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
`
