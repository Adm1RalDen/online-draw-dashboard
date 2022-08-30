import { defaultUserData, userInitialState, USER_REDUCER } from "../const";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SavedUserObject } from "types";
import { updateUserProfileBuilder } from "store/builders/updateUserProfileBuilder";
import { userRegistrationBuilder } from "store/builders/userRegistrationBuilder";
import { authorizedBuilder } from "store/builders/authorizedBuilder";
import { userLoginBuilder } from "store/builders/userLoginBuilder";

export const UserSlice = createSlice({
  name: USER_REDUCER,
  initialState: userInitialState,
  reducers: {
    initializeUser: (
      state,
      { payload: { token, user } }: PayloadAction<SavedUserObject>
    ) => {
      state.token = token;
      state.data.id = user.id;
      state.data.name = user.name;
      state.data.role = user.role;
    },

    logoutAction: (state) => {
      state.data = defaultUserData;
      state.isAuth = false;
      state.error = undefined;
      state.token = undefined;
    },
  },

  extraReducers: (builder) => {
    userLoginBuilder(builder);
    updateUserProfileBuilder(builder);
    userRegistrationBuilder(builder);
    authorizedBuilder(builder);
  },
});

export const { initializeUser, logoutAction } = UserSlice.actions;
