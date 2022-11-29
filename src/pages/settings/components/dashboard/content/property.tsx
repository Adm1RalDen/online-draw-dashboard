import { FC } from 'react'

import { PropertyText, PropertyWrapper } from './styles'

interface DasboardPropertyProps {
  property: string
  value: string | JSX.Element
}

export const DasboardProperty: FC<DasboardPropertyProps> = ({ property, value }) => (
  <PropertyWrapper>
    <strong>{property}</strong> <PropertyText>{value}</PropertyText>
  </PropertyWrapper>
)
