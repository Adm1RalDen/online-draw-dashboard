import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'

import { ButtonOutline } from 'components/button-outline'

export const BackButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <ButtonOutline {...props}>
    <ChevronLeftIcon />
    back
  </ButtonOutline>
)
