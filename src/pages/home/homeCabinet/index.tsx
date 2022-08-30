import { Link } from "react-router-dom";
import { HomeCabinetWrapper } from "./styles";

export const HomeCabinet = () => {
  return (
    <HomeCabinetWrapper>
      user cabinet <Link to="/cabinet">link</Link>
    </HomeCabinetWrapper>
  );
};
