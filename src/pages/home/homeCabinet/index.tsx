import { CABINET_URL } from 'const/urls'
import { Link } from 'react-router-dom'

import { HomeCabinetWrapper } from './styles'

export const HomeCabinet = () => {
  return (
    <HomeCabinetWrapper>
      user cabinet <Link to={CABINET_URL}>link</Link>
    </HomeCabinetWrapper>
  )
}
