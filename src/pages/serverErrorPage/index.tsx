import { Link } from "react-router-dom";
import { ServerErrorPageContent, ServerErrorPageWrapper } from "./styles";

export const ServerErrorPage = () => (
  <ServerErrorPageWrapper>
    <ServerErrorPageContent>
      <p>server error</p>
      <Link to="/">Home</Link>
    </ServerErrorPageContent>
  </ServerErrorPageWrapper>
);
