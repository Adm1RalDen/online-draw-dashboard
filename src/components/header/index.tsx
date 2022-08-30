import { BurgerMenu } from "components/burger-menu";
import { useSocket } from "hooks/useSocket";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logoutAction } from "store/slices/user.slice";
import { useAppDispatch } from "store/store";
import { Container } from "../container/styles";
import { LINKS } from "./const";
import {
  HeaderComponent,
  BurgerWrapper,
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
          {pathname !== "/cabinet" && <Link to="/cabinet">My Cabinet</Link>}
          <button onClick={handleLeave}>logout</button>
        </HeaderUserBlock>
      </Container>
    </HeaderComponent>
  );
};
