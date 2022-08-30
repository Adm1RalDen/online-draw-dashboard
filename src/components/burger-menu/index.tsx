import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { Burger, BurgerWrapper, NavigationMenu } from "./styles";

type ListItem = {
  url: string;
  label: string;
};
interface BurgerProps {
  list: ListItem[];
}

export const BurgerMenu: FC<BurgerProps> = ({ list = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <BurgerWrapper>
      <Burger isOpen={isOpen} onClick={handleClick} role="navigation">
        <span />
      </Burger>

      <NavigationMenu isOpen={isOpen}>
        {isOpen ? (
          <ul>
            {list.map((link) => (
              <li key={link.url}>
                <NavLink to={link.url}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        ) : null}
      </NavigationMenu>
    </BurgerWrapper>
  );
};
