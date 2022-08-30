import { FooterComponent } from "components/footer";
import { Header } from "components/header";
import { useOutlet } from "react-router-dom";
import { Wrapper } from "./styles";

export const ContentWrapper = () => {
  const outlet = useOutlet();
  return (
    <Wrapper>
      <Header />
      {outlet}
      <FooterComponent />
    </Wrapper>
  );
};
