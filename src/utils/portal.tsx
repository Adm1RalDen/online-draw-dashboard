import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const ChildrenWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: ${({ theme }) => theme.colors.portalBackground};
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.portal};
  backdrop-filter: blur(3px);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

type Props = {
  children?: ReactNode
}
export const Portal = ({ children = null }: Props) => {
  return createPortal(
    <ChildrenWrapper>{children}</ChildrenWrapper>,
    document.getElementById('modal') as HTMLDivElement
  )
}
