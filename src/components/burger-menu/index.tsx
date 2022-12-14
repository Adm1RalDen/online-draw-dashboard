import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Burger, NavigationMenu } from './styles'

interface BurgerListItem {
  url: string
  label: string
}

interface BurgerMenuProps {
  list: BurgerListItem[]
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <div>
      <Burger isOpen={isOpen} onClick={handleClick} role='navigation'>
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
    </div>
  )
}
