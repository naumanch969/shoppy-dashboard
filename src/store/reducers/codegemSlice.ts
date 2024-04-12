import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CodegemUser } from "../../interfaces";
import axios from "axios";
import { SERVER_URL } from "../../constants";

interface CodegemUserState {
  codegemUser?: CodegemUser;
  codegemUsers: CodegemUser[];
  isLoading: boolean;
  error: string | null;
}

export const fetchCodegemUsers = createAsyncThunk("codegemUsers/fetchCodegemUsers", async () => {
  const { data } = await axios.get(`${SERVER_URL}/codegemUsers`);
  return data;
});

const initialState: CodegemUserState = {
  codegemUser: undefined,
  codegemUsers: [],
  isLoading: false,
  error: null,
};

const codegemUsersSlice = createSlice({
  name: "codegemUsers",
  initialState,
  reducers: {
    resetState: () => initialState,
    setCodegemUserSlice: (state, action: PayloadAction<CodegemUser>) => {
      state.codegemUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCodegemUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCodegemUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.codegemUsers = action.payload;
      })
      .addCase(fetchCodegemUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message as string;
      })
      .addDefaultCase((state) => state);
  },
});

export default codegemUsersSlice.reducer;
export const { resetState, setCodegemUserSlice } = codegemUsersSlice.actions;
