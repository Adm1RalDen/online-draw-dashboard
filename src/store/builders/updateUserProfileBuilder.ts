import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { updateUserProfileThunk } from "store/thunks/user/user.thunk";
import { UserReducerInitialTypes } from "store/types/user.types";

export const updateUserProfileBuilder = (
  builder: ActionReducerMapBuilder<UserReducerInitialTypes>
) => {
  builder.addCase(updateUserProfileThunk.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(updateUserProfileThunk.fulfilled, (state) => {
    state.isLoading = false;
  });
  builder.addCase(updateUserProfileThunk.rejected, (state) => {
    state.isLoading = false;
    state.error = "Error";
  });
};
