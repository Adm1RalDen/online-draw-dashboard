import { CABINET_URL } from "const/urls";
import { useSocket } from "hooks/useSocket";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppDispatch } from "store";
import { logoutAction } from "store/slices/user.slice";

import { BurgerMenu } from "components/burger-menu";
import { Button } from "components/button";

import { Container } from "../container";
import { LINKS } from "./const";
import {
  BurgerWrapper,
  HeaderComponent,
  HeaderNavigation,
  HeaderUserBlock,
} from "./styles";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { socket } = useSocket();
  const { pathname } = useLocation();

  const handleLeave = () => {
    socket.disconnect();
    dispatch(logoutAction());
  };

  return (
    <HeaderComponent>
      <Container>
        <BurgerWrapper>
          <BurgerMenu list={LINKS} />
        </BurgerWrapper>

        <HeaderNavigation>
          <ul>
            {LINKS.map((link) => (
              <li key={link.url}>
                <NavLink to={link.url}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </HeaderNavigation>

        <HeaderUserBlock>
          {pathname !== CABINET_URL && <Link to={CABINET_URL}>My Cabinet</Link>}
          <Button onClick={handleLeave}>logout</Button>
        </HeaderUserBlock>
      </Container>
    </HeaderComponent>
  );
};
