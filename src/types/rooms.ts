type UserInRoom = {
  userId: string;
  userName: string;
  online: boolean;
};

export type ActiveRoom = {
  _id: string;
  roomPassword: string;
  roomName: string;
  users: UserInRoom[];
  status: boolean;
  limit: number;
  roomImages: string[];
  owner: string;
  isShow: boolean;
};
