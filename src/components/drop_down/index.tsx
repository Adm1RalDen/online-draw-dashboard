import { FC, useState } from 'react'

import { DropDownContainer } from './styles'

export interface DropDownProps {
  list: string[]
}

export const DropDown: FC<DropDownProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <DropDownContainer isOpen={isOpen}>
      <div onClick={handleOpen}>{isOpen ? 'close' : 'open'}</div>

      <div>
        {isOpen && (
          <>
            {list.map((label) => (
              <div key={label}>{label}</div>
            ))}
          </>
        )}
      </div>
    </DropDownContainer>
  )
}
