import { Link } from "react-router-dom";
import { NotFoundPageWrapper, NotFoundPageContent } from "./styles";

export const NotFoundPage = () => (
  <NotFoundPageWrapper>
    <NotFoundPageContent>
      <p>not-found</p>
      <Link to="/">Home</Link>
    </NotFoundPageContent>
  </NotFoundPageWrapper>
);
