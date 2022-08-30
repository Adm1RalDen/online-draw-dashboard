import { useContext } from "react";
import { PaintContext } from "../../context/paintContext";
import { StyledSettings } from "./styles";

export const SettingsBar = () => {
  const { changeStrokeStyle, changeLineWidth } = useContext(PaintContext);
  return (
    <StyledSettings>
      <div>
        <label htmlFor="borderSize">Border size</label>
        <input
          type="number"
          id="borderSize"
          name="borderSize"
          defaultValue={1}
          onChange={(e) => changeLineWidth(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="borderColor">Border color</label>
        <input
          type="color"
          id="borderColor"
          name="borderColor"
          onChange={(e) => changeStrokeStyle(e.target.value)}
        />
      </div>
    </StyledSettings>
  );
};
