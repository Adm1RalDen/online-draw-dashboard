import { FC } from 'react'

import { StyledDotsLoader, StyledLoaderWrapper, StyledSolidLoader } from './styles'
import { LoaderProps } from './types'

export const Loader: FC<LoaderProps> = ({ type = 'dots', isLoading = true, ...others }) => {
  const setLoaderElements = () => (
    <>
      <div />
      <div />
      <div />
      <div />
    </>
  )

  if (!isLoading) return null

  return (
    <StyledLoaderWrapper {...others}>
      {type === 'dots' ? (
        <StyledDotsLoader {...others}>{setLoaderElements()}</StyledDotsLoader>
      ) : (
        <StyledSolidLoader {...others}>{setLoaderElements()}</StyledSolidLoader>
      )}
    </StyledLoaderWrapper>
  )
}
