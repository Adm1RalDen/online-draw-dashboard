import { Link } from 'react-router-dom'

import { HOME_URL } from 'const/urls'

import { ServerErrorPageContent, ServerErrorPageWrapper } from './styles'

export const ServerErrorPage = () => (
  <ServerErrorPageWrapper>
    <ServerErrorPageContent>
      <p>Server error</p>
      <Link to={HOME_URL}>Home</Link>
    </ServerErrorPageContent>
  </ServerErrorPageWrapper>
)
