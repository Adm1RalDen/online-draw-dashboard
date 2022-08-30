import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { getSavedUser } from "services/token.service";
import { AuthorizedThunk } from "store/thunks/user/authorization.thunk";
import { UserReducerInitialTypes } from "store/types/user.types";
import { AuthorizedUser, SavedUserObject } from "types";

export const authorizedBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>
) => {
  builder.addCase(AuthorizedThunk.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(
    AuthorizedThunk.fulfilled,
    (state, { payload }: PayloadAction<AuthorizedUser>) => {
      const user = getSavedUser() as SavedUserObject;
      state.token = user.token;
      state.data = { ...payload };
      state.isLoading = false;
      state.error = undefined;
      state.isAuth = true;
    }
  );
  builder.addCase(AuthorizedThunk.rejected, (state, { payload }) => {
    state.isLoading = false;
    state.error = payload as string;
  });
};
