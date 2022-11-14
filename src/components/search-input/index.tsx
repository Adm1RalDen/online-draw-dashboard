import { FC } from 'react'

import { StyledSearchInput } from './styles'

export const SearchInput: FC<Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>> = (
  props
) => <StyledSearchInput placeholder='Search here' {...props} type='text' />
