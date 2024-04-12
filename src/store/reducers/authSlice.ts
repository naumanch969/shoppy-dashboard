import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { User } from "../../interfaces";

interface AuthState {
  auth: User | null;
  isLoading: boolean;
  error: { message: string; code: string } | null;
}

export const signUp = createAsyncThunk("auth/signUp", async () => {
  try {
  } catch (error) {
    throw error.message;
  }
});

export const signIn = createAsyncThunk<
  any,
  { email: string; password: string }
>("auth/signIn", async () => {});

export const signOut = createAsyncThunk<void, void>(
  "auth/signOut",
  async () => {
    localStorage.clear();
  }
);

const initialState: AuthState = {
  auth: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {
          message: action.error.message as string,
          code: action.error.code as string,
        };
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.auth = action.payload;
        localStorage.setItem("auth", JSON.stringify(action.payload));
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {
          message: action.error.message as string,
          code: action.error.code as string,
        };
      })
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isLoading = false;
        state.auth = null;
        localStorage.removeItem("auth");
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {
          message: action.error.message as string ,
          code: action.error.code as string ,
        };
        localStorage.removeItem("auth");
      })
      .addCase(authActions.resetState, () => {
        return initialState;
      });
  },
});

export default authSlice.reducer;
export const selectAuth = (state: RootState) => state.auth.auth;
export const { actions: authActions } = authSlice;
