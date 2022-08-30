import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_REDUCER } from "store/const";
import { getProfile } from "api/user/getProfile";
import { updateUser } from "api/user/update";
import { AxiosError } from "axios";
import { logoutAction } from "store/slices/user.slice";

export const getUserProfileThunk = createAsyncThunk(
  `${USER_REDUCER}/profile-thunk`,
  async (id: string) => {
    const response = await getProfile(id);
    return response.data;
  }
);

export const updateUserProfileThunk = createAsyncThunk(
  `${USER_REDUCER}/update-profile-thunk`,
  async (data: any, { rejectWithValue, dispatch }) => {
    try {
      const response = await updateUser(data);
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 401) {
          dispatch(logoutAction());
          return rejectWithValue("User is not authorized");
        }
        return rejectWithValue("Error");
      }
      return rejectWithValue("Error");
    }
  }
);
