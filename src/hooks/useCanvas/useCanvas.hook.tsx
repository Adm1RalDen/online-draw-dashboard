import { useSocket } from "hooks/useSocket";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  userDataSelector,
  userInfoSelector,
} from "store/selectors/user.selector";
import { useAppSelector } from "store/store";
import { ToolsTypes } from "types/canvas";

import { Tool } from "../../canvas_classes/index";
import { handleSetTool, setCanvasHeight, setCanvasWidth } from "./const";
import {
  ClearDrawConnection,
  SetDrawConnection,
} from "./methods/setDrawConnection";
import { handleSnapshot, pushRedo, pushUndo } from "./methods/snapshot";

type ParamsProps = {
  roomId: string;
};

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const navigate = useNavigate();
  const [tool, setTool] = useState<ToolsTypes>("pen");
  const [snapshotList, setSnapshotList] = useState<string[]>([]);
  const [snapshotIndex, setSnapshotIndex] = useState(-1);
  const { socket } = useSocket();
  const { roomId } = useParams<ParamsProps>();
  const { name, id } = useAppSelector(userDataSelector);

  useEffect(() => {
    canvasRef.current.width = setCanvasWidth();
    canvasRef.current.height = setCanvasHeight();

    handleSnapshot({
      snapshotIndex,
      snapshotList,
      setSnapshotIndex,
      setSnapshotList,
      canvasRef,
    });
    handleSetTool({ canvasRef, roomId: roomId!, socket, tool });
    SetDrawConnection({
      userId: id,
      socket,
      canvasRef,
      roomId: roomId || "",
      name,
      navigate,
      fillStyle: Tool.fillStyle,
      strokeStyle: Tool.strokeStyle,
      lineWidth: Tool.lineWidth,
      setSnapshotList,
      snapshotList,
      setSnapshotIndex,
      snapshotIndex,
    });
    return () => {
      ClearDrawConnection(socket);
    };
  }, []);

  useEffect(() => {
    handleSetTool({ canvasRef, roomId: roomId!, socket, tool });
  }, [tool]);

  const setToolhandler = (tool: ToolsTypes) => setTool(tool);
  const changeFillStyle = (color: string) =>
    Tool.changeFillStyle(canvasRef.current.getContext("2d"), color);
  const changeStrokeStyle = (color: string) =>
    Tool.changeStrokeStyle(canvasRef.current.getContext("2d"), color);
  const changeLineWidth = (size: number) =>
    Tool.changeLineWidth(canvasRef.current.getContext("2d"), size);
  const handleReset = () =>
    pushUndo(
      canvasRef.current.getContext("2d"),
      snapshotList,
      snapshotIndex,
      setSnapshotIndex
    );
  const handleRedo = () =>
    pushRedo(
      canvasRef.current.getContext("2d"),
      snapshotList,
      snapshotIndex,
      setSnapshotIndex
    );

  return {
    canvasRef,
    tool,
    setToolhandler,
    changeFillStyle,
    changeStrokeStyle,
    changeLineWidth,
    handleReset,
    handleRedo,
    handleSnapshot: () =>
      handleSnapshot({
        snapshotIndex,
        snapshotList,
        setSnapshotIndex,
        setSnapshotList,
        canvasRef,
      }),
    snapshot: snapshotList[snapshotIndex] || null,
  };
};
