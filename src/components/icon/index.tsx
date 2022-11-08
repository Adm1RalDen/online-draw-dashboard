import { FC } from 'react'

import { StyledIcon } from './styles'

interface IconProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  size: number
}

export const Icon: FC<IconProps> = ({ size, ...props }) => (
  <StyledIcon {...props} width={size} height={size} />
)
