export interface BurgerListItem {
  url: string
  label: string
}

export interface BurgerMenuProps {
  list: BurgerListItem[]
}

export interface StyledBurgerProps {
  isOpen: boolean
}
