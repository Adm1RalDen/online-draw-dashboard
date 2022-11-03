export interface CreateRoom {
  userId: string
  userName: string
  roomName: string
  roomPassword: string
}

export interface EnterInRoomType {
  userId: string
  userName: string
  roomId: string
  roomPassword: string
}

export interface ChatMessageType {
  _id: string
  userId: string
  avatar: string
  name: string
  message: string
}

export interface ChatError {
  error: string
}

export interface ChatType {
  method: 'GET_CHAT' | 'MESSAGE' | 'ERROR'
  data: ChatMessageType[] | ChatMessageType | ChatError
}
