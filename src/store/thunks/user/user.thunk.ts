import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "api/user/getProfile";
import { updateUser } from "api/user/update";
import { AxiosError } from "axios";
import { USER_REDUCER } from "store/const";

export const getUserProfileThunk = createAsyncThunk(
  `${USER_REDUCER}/profile-thunk`,
  async (id: string) => {
    const response = await getProfile(id);
    return response.data;
  }
);

export const updateUserProfileThunk = createAsyncThunk(
  `${USER_REDUCER}/update-profile-thunk`,
  async (data: FormData, { rejectWithValue }) => {
    try {
      const response = await updateUser(data);
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return rejectWithValue("Error");
      }
      return rejectWithValue("Error");
    }
  }
);
