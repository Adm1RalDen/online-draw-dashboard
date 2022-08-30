import { RootState } from "store/store";

export const userInfoSelector = (state: RootState) => state.user;
export const userDataSelector = (state: RootState) => state.user.data;
