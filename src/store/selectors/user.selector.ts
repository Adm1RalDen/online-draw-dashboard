import { RootState } from "store";

export const userInfoSelector = (state: RootState) => state.user;
export const userDataSelector = (state: RootState) => state.user.data;
