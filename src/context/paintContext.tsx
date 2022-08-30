import React, { createContext } from "react";
import { FunctionWithParams } from "types";
import { ToolsTypes } from "types/canvas";
import { noopFunction } from "utils/noop";

type PaintContextTypes = {
  canvasRef: React.Ref<HTMLCanvasElement>;
  tool: ToolsTypes;
  snapshot: string | null;
  setToolhandler: FunctionWithParams<ToolsTypes>;
  changeFillStyle: FunctionWithParams<string>;
  changeStrokeStyle: FunctionWithParams<string>;
  changeLineWidth: FunctionWithParams<number>;
  handleReset: VoidFunction;
  handleRedo: VoidFunction;
  handleSnapshot: VoidFunction;
};

export const PaintContext = createContext<PaintContextTypes>({
  setToolhandler: noopFunction,
  changeFillStyle: noopFunction,
  changeStrokeStyle: noopFunction,
  changeLineWidth: noopFunction,
  handleReset: noopFunction,
  handleRedo: noopFunction,
  handleSnapshot: noopFunction,
  canvasRef: null,
  tool: "pen",
  snapshot: null,
});
