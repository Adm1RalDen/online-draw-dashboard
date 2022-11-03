import { FC } from 'react'

import { StyledIcon } from './styles'
import { IconProps } from './types'

export const Icon: FC<IconProps> = ({ size, ...props }) => (
  <StyledIcon {...props} width={size} height={size} />
)
