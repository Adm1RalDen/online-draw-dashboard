import { useOutlet } from 'react-router-dom'

import { Footer } from 'components/footer'
import { Header } from 'components/header'

import { Wrapper } from './styles'

export const ContentWrapper = () => {
  const outlet = useOutlet()

  return (
    <Wrapper>
      <Header />
      {outlet}
      <Footer />
    </Wrapper>
  )
}
