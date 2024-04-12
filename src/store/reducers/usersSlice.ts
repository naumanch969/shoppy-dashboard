import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces";
import axios from "axios";
import { SERVER_URL } from "../../constants";

interface UserState {
  user?: User;
  users: User[];
  isLoading: boolean;
  error: string | null;
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get(`${SERVER_URL}/users`);
  return data.users;
});

const initialState: UserState = {
  user: undefined,
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetState: () => initialState,
    setUserSlice: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message as string;
      })
      .addDefaultCase((state) => state);
  },
});

export default usersSlice.reducer;
export const { resetState, setUserSlice } = usersSlice.actions;
