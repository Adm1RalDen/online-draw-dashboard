import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { UserRegistrationThunk } from "store/thunks/user/authorization.thunk";
import { UserReducerInitialTypes } from "store/types/user.types";

export const userRegistrationBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>
) => {
  builder.addCase(UserRegistrationThunk.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(UserRegistrationThunk.fulfilled, (state) => {
    state.isLoading = false;
  });
  builder.addCase(UserRegistrationThunk.rejected, (state, { payload }) => {
    state.isLoading = false;
    state.error = payload as string;
  });
};
