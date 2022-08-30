export interface UserLoginFormData {
  email: string;
  password: string;
}
export interface UserRegistrationData extends UserLoginFormData {
  name: string;
}
export interface AuthorizedUser {
  id: string;
  name: string;
  avatar: string;
  backgroundFon: string;
  age: string;
  role: string;
  email: string;
  country: string;
  city: string;
  color: string;
  gender: string;
  date: string;
  biography: string;
}

export interface AuthorizedUserObject {
  token: string;
  data: AuthorizedUser;
}
export interface SavedUserObject {
  token: string;
  user: Pick<AuthorizedUser, "name" | "role" | "id">;
}
export interface FunctionWithParams<T> {
  (e: T): void;
}
export interface AuthContextTypes {
  isAuth: boolean;
  isReady: boolean;
  userData: SavedUserObject;
  login: FunctionWithParams<UserLoginFormData>;
  logout: VoidFunction;
  isLoading: boolean;
}
export interface RoomType {
  _id: string;
}

export interface UserInRoom {
  userName: string;
  userId: string;
}
