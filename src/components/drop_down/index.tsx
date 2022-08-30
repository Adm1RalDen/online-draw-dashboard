import { FC, useState } from "react";
import { DropDownContainer } from "./styles";

type DropDownTypes = {
  list: string[];
};

export const DropDown: FC<DropDownTypes> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <DropDownContainer isOpen={isOpen}>
      <div className="alert" onClick={handleOpen}>
        {isOpen ? "close" : "open"}
      </div>

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
  );
};
