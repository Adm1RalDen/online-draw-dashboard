import { Link } from "react-router-dom";

import { NotFoundPageContent, NotFoundPageWrapper } from "./styles";

export const NotFoundPage = () => (
  <NotFoundPageWrapper>
    <NotFoundPageContent>
      <p>not-found</p>
      <Link to="/">Home</Link>
    </NotFoundPageContent>
  </NotFoundPageWrapper>
);
