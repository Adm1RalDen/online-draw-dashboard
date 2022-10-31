import { Link } from 'react-router-dom'

import { HOME_URL } from 'const/urls'

import { NotFoundPageContent, NotFoundPageWrapper } from './styles'

export const NotFoundPage = () => (
  <NotFoundPageWrapper>
    <NotFoundPageContent>
      <p>not-found</p>
      <Link to={HOME_URL}>Home</Link>
    </NotFoundPageContent>
  </NotFoundPageWrapper>
)
