export type CreateRoom = {
  userId: string;
  userName: string;
  roomName: string;
  roomPassword: string;
};

export type EnterInRoomType = {
  userId: string;
  userName: string;
  roomId: string;
  roomPassword: string;
};

export type ChatMessage = {
  userId: string;
  avatar: string;
  name: string;
  message: string;
};

export type ChatError = {
  error: string;
};

export type ChatType = {
  method: "GET_CHAT" | "MESSAGE" | "ERROR";
  data: ChatMessage[] | ChatMessage | ChatError;
};
