import { createContext } from "react";
import { Socket } from "socket.io-client";

type WSContextType = {
  socket: Socket<any, any>;
};

export const WsContext = createContext<WSContextType>({ socket: null! });
