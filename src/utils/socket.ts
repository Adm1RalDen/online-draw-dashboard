import { io } from "socket.io-client";

export const socket = io(process.env.SOCKET_HOST || "http://localhost:5000");
