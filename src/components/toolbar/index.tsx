import { EXIT_SOCKET } from "const/sockets";
import { useSocket } from "hooks/useSocket";
import { MouseEvent, useContext } from "react";
import { useParams } from "react-router-dom";
import { userDataSelector } from "store/selectors/user.selector";
import { useAppSelector } from "store/store";
import { ToolsTypes } from "types/canvas";

import { Input } from "components/input";

import { PaintContext } from "../../context/paintContext";
import {
  DrawToolsWrapper,
  LeaveButton,
  SnapshotButtonsWrapper,
  StyledToolbar,
  ToolButton,
} from "./styles";

export const Toolbar = () => {
  const {
    setToolhandler,
    tool,
    changeFillStyle,
    handleRedo,
    handleReset,
    snapshot,
  } = useContext(PaintContext);
  const { roomId } = useParams();
  const { id } = useAppSelector(userDataSelector);
  const { socket } = useSocket();

  const handleChangeFillStyle = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeFillStyle(e.target.value);

  const handleChangeTool = (e: MouseEvent) => {
    if ((e.target as HTMLElement).tagName === "BUTTON") {
      setToolhandler(
        (e.target as HTMLButtonElement).dataset.tool as ToolsTypes
      );
    }
  };

  const handleExitFromRoom = () => {
    socket.emit(EXIT_SOCKET, {
      roomId,
      userId: id,
    });
  };

  const handleSavePhoto = async () => {
    if (snapshot) {
      const res = await fetch(snapshot);
      const blob = await res.blob();
      const file = new File([blob], "image", { type: "image/png" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(file);
      a.download = "image.png";
      a.click();
    }
  };

  return (
    <StyledToolbar>
      <DrawToolsWrapper onClickCapture={handleChangeTool}>
        <ToolButton
          img="../assets/pen.png"
          data-tool="pen"
          active={tool === "pen"}
        />
        <ToolButton
          img="../assets/square.png"
          data-tool="square"
          active={tool === "square"}
        />
        <ToolButton
          img="../assets/circle.png"
          data-tool="circle"
          active={tool === "circle"}
        />
        <ToolButton
          img="../assets/eraser.png"
          data-tool="eraser"
          active={tool === "eraser"}
        />
        <ToolButton
          img="../assets/line.png"
          data-tool="line"
          active={tool === "line"}
        />
        <Input type="color" name="color" onChange={handleChangeFillStyle} />
      </DrawToolsWrapper>

      <SnapshotButtonsWrapper>
        <ToolButton img="../assets/right-arrow.png" onClick={handleReset} />
        <ToolButton img="../assets/right-arrow.png" onClick={handleRedo} />
        <ToolButton img="../assets/diskette.png" onClick={handleSavePhoto} />
        <LeaveButton onClick={handleExitFromRoom}>Leave</LeaveButton>
      </SnapshotButtonsWrapper>
    </StyledToolbar>
  );
};
