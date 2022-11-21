import { XMarkIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'

export const CloseIcon: FC<React.ComponentProps<'svg'>> = ({ ...props }) => (
  <XMarkIcon width={20} height={20} {...props} />
)
