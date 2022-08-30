import { WsContext } from "context/ws.context";
import { useContext } from "react";

export const useSocket = () => useContext(WsContext);
