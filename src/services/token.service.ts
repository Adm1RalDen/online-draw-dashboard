import jwtDecode from "jwt-decode";
import { SavedUserObject } from "types";

const USER = "user";

export const saveUserInStorage = (user: SavedUserObject) =>
  localStorage.setItem(USER, JSON.stringify(user));

export const deleteSavedToken = () => localStorage.removeItem(USER);

export const getSavedUser = (): SavedUserObject | null => {
  const user = localStorage.getItem(USER);
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const getToken = () => {
  const user = localStorage.getItem(USER);
  if (user) {
    const obj: SavedUserObject = JSON.parse(user);
    return obj.token;
  }
  return null;
};

export const decodeJWT = (token: string) => jwtDecode(token);
