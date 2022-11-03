import React, { FC, useState } from 'react'

import { Heading3 } from 'styles/typography/styles'

import { DEFAULT_POPPER_TITLE, POPPER_AGREE, POPPER_DISAGREE } from './const'
import { PopperButton, PopperButtonsWrapper, PopperModal, PopperWrapper } from './styles'
import { PopperProps } from './types'

export const Popper: FC<PopperProps> = ({ children, onAgreeAction, title = '' }) => {
  const [isShowPopper, setIsShowPopper] = useState(false)
  const handleShowPopper = () => setIsShowPopper(true)
  const handleHidePopper = () => setIsShowPopper(false)

  return (
    <PopperWrapper>
      {React.cloneElement(children, { onClick: handleShowPopper })}
      {isShowPopper && (
        <PopperModal>
          <Heading3>{title || DEFAULT_POPPER_TITLE}</Heading3>
          <PopperButtonsWrapper>
            <PopperButton onClick={onAgreeAction}>{POPPER_AGREE}</PopperButton>
            <PopperButton onClick={handleHidePopper}>{POPPER_DISAGREE}</PopperButton>
          </PopperButtonsWrapper>
        </PopperModal>
      )}
    </PopperWrapper>
  )
}
