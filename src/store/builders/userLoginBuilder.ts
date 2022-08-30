import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { UserLoginThunk } from "store/thunks/user/authorization.thunk";
import { UserReducerInitialTypes } from "store/types/user.types";
import { AuthorizedUser } from "types";

type LoginPayload = {
  token: string;
  profile: AuthorizedUser;
};

export const userLoginBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>
) => {
  builder.addCase(UserLoginThunk.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(
    UserLoginThunk.fulfilled,
    (state, { payload: { token, profile } }: PayloadAction<LoginPayload>) => {
      state.token = token;
      state.data = { ...profile };
      state.error = undefined;
      state.isLoading = false;
      state.isAuth = true;
    }
  );
  builder.addCase(UserLoginThunk.rejected, (state, { payload }) => {
    state.isLoading = false;
    state.isAuth = false;
    state.error = payload as string;
  });
};
